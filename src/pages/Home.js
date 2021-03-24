import getData from '../utils/getData';

const Home = async () => {
  const products = await getData();
  
  const view = `
    <div class = "Product">
      ${products.map(product => `
      
      <article class="Product-item">
          <img src="${product.url_image}" alt="${product.name}">
          <h2>Nombre : ${product.name}</h2>
          <h2>Precio $ :${product.price}</h2>
          <h2>Descuento :${product.discount} %</h2>   
      </article>
      
      `).join('')}
      
    </div>
  
  `;
  return view;
};

export default Home;