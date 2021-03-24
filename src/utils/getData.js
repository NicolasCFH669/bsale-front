const { async } = require("rxjs");
// falta crear metodos de los filtros ej: sobre la apifilter crear function que trae pisco, bebida, etc...

const api = 'http://localhost:3002/api/v.1.0/products';
const apifilter = 'http://localhost:3002/api/v.1.0/:id';

const getData = async (id) => {
  const apiURL = id ? `${apifilter}${id}` : api;

  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
  }catch(e) {
    console.log('Fecth Error', e);
  }
};

export default getData;