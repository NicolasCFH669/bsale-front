import { async } from 'rxjs';
import getDrinks from '../utils/getDrinks'

const ProductsDrinks = async () => {
  const pfilter = await getDrinks();
  
  const view =  `
    <div class = "Product">
      ${pfilter.map( prod => `
      <article class="Product-item">
          <img src="${prod.url_image ? prod.url_image : ''}" alt="${prod.name}">
          <h2>Nombre : ${prod.name}</h2>
          <h2>precio $ :${prod.price}</h2> 
          <h2>Descuento :${prod.discount} %</h2>    
      </article>
      
      `).join('')}
      
    </div>

  `;
  return view;

};

export default ProductsDrinks;