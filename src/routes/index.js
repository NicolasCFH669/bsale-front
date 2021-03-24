import Header from '../templates/Header';
import Home from '../pages/Home';
import ProductFilter from  '../pages/ProductFilter';
import ProductsPisco from  '../pages/ProductsPisco';
import ProductsBeer from '../pages/ProductsBeer';
import ProductsDrinks from '../pages/ProductsDrinks';
import ProductsRum from '../pages/ProductsRum';
import ProductsSnacks from '../pages/ProductsSnacks';
import ProductsVodka from '../pages/ProductsVodka';
import Error from '../pages/Error';
import { async } from 'rxjs';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/rsolveRoutes';


const routes = {
  '/': Home,
  '/energetica': ProductFilter,
  '/piscos': ProductsPisco,
  '/lic-ron': ProductsRum,
  '/bebidas': ProductsDrinks,
  '/snacks': ProductsSnacks,
  '/cervezas': ProductsBeer,
  '/vodka': ProductsVodka
}

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error;
  content.innerHTML = await render(); 
};

export default router;