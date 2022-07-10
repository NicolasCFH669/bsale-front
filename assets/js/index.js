const API_PRODUCTS = 'http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/products';
const API_CATEGORIES = 'http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/categories';


var categoriesProducts = document.getElementById("categories-products")

const getCategories = () => {
  let categories = [];
  axios.get(API_CATEGORIES).then(res => {
    categories = res.data;

    categories.forEach(category => {
      let listItemProduct = document.createElement("li");
      listItemProduct.classList.add("nav-link", "text-white")
      listItemProduct.innerHTML = `<a href="/categoriesDetail.html?id=${category.id}" class="nav-link text-white"> 
                                    <i class="bi bi-tag-fill"></i>
                                    ${(category.name).toUpperCase()}
                                    </a>`;
      
      categoriesProducts.appendChild(listItemProduct)

    });
  }).catch((error) => {
    console.log(error)
  })
}


const productsShow = document.getElementById("products-show");
const selectedOrder = document.querySelector("#selected-order");
const inputValue = document.getElementById("input-value");


const createProducts = (arr) => {
  arr.forEach(product => {
    let divCol = document.createElement("div");
    divCol.classList.add("col");

    let imageNotFound = `https://st3.depositphotos.com/1012074/13272/v/450/depositphotos_132725496-stock-illustration-product-not-available-icon.jpg"`;

    let divCard = document.createElement("div");
    divCard.classList.add("card", "h-100");

    let hasDiscount = product.discount > 0 ? product.discount +"%" : "No";
    
    divCard.innerHTML = `<a href="/productDetail.html?id=${product.id}">
                          <img src="${product.url_image || imageNotFound}" class="card-img-top" style="height: 400px" alt="producto">
                        </a>
                        <div class="card-body">
                          <h5 class="card-title">${(product.name.toUpperCase())}</h5>
                          <h3 class="card-subtitle">$ ${(product.price).toLocaleString()}</h3>
                          <h3 class="card-subtitle">Descuento: ${hasDiscount} </h3>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Powered by Nicolas Martinez</small>
                        </div>`;
    
    divCol.appendChild(divCard);
    productsShow.appendChild(divCol);
  })
};


const createProductsByDefault = () => {
  let products = [];

  axios.get(API_PRODUCTS).then(res => {
    products = res.data;

    
    inputValue.addEventListener("input", (evn) => {

      let valueInput = evn.target.value.toLowerCase();
      
      let searchProduct = [];
      products.forEach(product => {
        let nameProduct = product.name.toLowerCase();
        
        if(nameProduct.includes(valueInput)){
          productsShow.innerHTML = "" ;
          searchProduct.push(product)
          createProducts(searchProduct);
        }
        
      })
      
    });

    selectedOrder.addEventListener('change', (evn) => {
      let productSorted = []

      if(evn.target.value == 1) {
        productsShow.innerHTML = ""; 
        productSorted = products.sort((a, b) => a.name.localeCompare(b.name) );
        createProducts(productSorted);
      }

      if(evn.target.value == 2) {
        productsShow.innerHTML = "";      
        productSorted = products.sort((a, b) =>  b.name.localeCompare(a.name));
        createProducts(productSorted);
      }

      if(evn.target.value == 3) {
        productSorted = products.sort((a, b) => {return  a.price - b.price});
        productsShow.innerHTML = "";      
        createProducts(productSorted);
      }

      if(evn.target.value == 4) {
        productSorted = products.sort((a, b) => b.price - a.price);
        productsShow.innerHTML = "";
        createProducts(productSorted);
      }
    });
    
    createProducts(products);
  });
}