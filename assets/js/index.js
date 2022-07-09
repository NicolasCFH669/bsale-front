var API_PRODUCTS = 'http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/products';
var API_CATEGORIES = 'http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/categories';


var categoriesProducts = document.getElementById("categories-products")

const getCategories = () => {
  let categories = [];
  axios.get(API_CATEGORIES).then(res => {
    categories = res.data;
    // console.log(categories)

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

getCategories();

var productsShow = document.getElementById("products-show");
// console.log(productsShow)

const createProductsByDefault = () => {
  let products = []
  axios.get(API_PRODUCTS).then(res => {
    products = res.data;

    products.forEach(product => {
      let divCol = document.createElement("div");
      divCol.classList.add("col");

      let imageNotFound = `https://st3.depositphotos.com/1012074/13272/v/450/depositphotos_132725496-stock-illustration-product-not-available-icon.jpg"`;

      let divCard = document.createElement("div");
      divCard.classList.add("card", "h-100");

      let hasDiscount = product.discount > 0 ? product.discount +"%" : "No";
      
      divCard.innerHTML = `<img src="${product.url_image || imageNotFound}" class="card-img-top h-100" alt="producto">
                          <div class="card-body">
                            <h5 class="card-title">${(product.name.toUpperCase())}</h5>
                            <h3 class="card-subtitle">$ ${(product.price).toLocaleString()}</h3>
                            <h3 class="card-subtitle">Descuento: ${hasDiscount} </h3>
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">Powered by Nicolas Martinez</small>
                          </div>`;
      
      divCol.appendChild(divCard);

      console.log(product)
      productsShow.appendChild(divCol);
    })
  });
}

createProductsByDefault();