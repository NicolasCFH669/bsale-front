
const createProductDetail = () => {

  const url = new URLSearchParams(window.location.search);
  const id = Object.fromEntries(url.entries());
  const API_PRODUCT_DETAIL = `http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/product/${id.id}`;


  axios.get(API_PRODUCT_DETAIL).then(res => {
    let detailProduct = res.data;

    let divCol = document.createElement("div");
    divCol.classList.add("col");

    let imageNotFound = `https://st3.depositphotos.com/1012074/13272/v/450/depositphotos_132725496-stock-illustration-product-not-available-icon.jpg"`;

    let divCard = document.createElement("div");
    divCard.classList.add("card", "h-100");

    let hasDiscount = detailProduct.discount > 0 ? detailProduct.discount +"%" : "No";
    
    divCard.innerHTML = `<img src="${detailProduct.url_image || imageNotFound}" class="card-img-top" style="height: 400px" alt="producto">
                        <div class="card-body">
                          <h5 class="card-title">${(detailProduct.name.toUpperCase())}</h5>
                          <h3 class="card-subtitle">$ ${(detailProduct.price).toLocaleString()}</h3>
                          <h3 class="card-subtitle">Descuento: ${hasDiscount} </h3>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Powered by Nicolas Martinez</small>
                        </div>`;
    
    divCol.appendChild(divCard);
    productsShow.appendChild(divCol);     
      
    
    
    console.log(detailProduct)
  })


}

createProductDetail();