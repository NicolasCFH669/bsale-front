
const createDetailProductView = () => {
  const url = new URLSearchParams(window.location.search);
  const id = Object.fromEntries(url.entries());

  const categoryName = document.getElementById("category-name");

  
  const API_CATEGORY = `http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/categories/${id.id}`;
  const API_CATEGORY_NAME = 'http://backendtestbsale-env.eba-hushf4i9.us-east-1.elasticbeanstalk.com/api/categories/';

  axios.get(API_CATEGORY_NAME).then(res => {
    let categoryNameId = res.data;

    categoryNameId.forEach(category => {
      if(category.id == id.id) {
        categoryName.innerText = category.name.toUpperCase();
      }
    });
  })

  axios.get(API_CATEGORY).then(res => {
    let productsDetails = res.data;
    createProducts(productsDetails);
  }).catch((error) => {
    console.log(error);
  })

}


createDetailProductView();