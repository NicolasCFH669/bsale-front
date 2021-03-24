import { async } from 'rxjs';
import getRums from '../utils/getRums'

const ProductsRum = async () => {
  const pfilter = await getRums();
  console.log(pfilter)
  
  const view =  `
    <div class = "Product">
      ${pfilter.map( prod => `
      <article class="Product-item">
          <img src="${prod.url_image}" alt="${prod.name}">
          <h2>Nombre : ${prod.name}</h2>
          <h2>precio $ :${prod.price}</h2>  
          <h2>Descuento :${prod.discount} %</h2> 
      </article>
      
      `).join('')}
      
    </div>

  `;
  return view;

};

export default ProductsRum;