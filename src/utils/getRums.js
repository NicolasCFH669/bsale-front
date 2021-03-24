const api = 'http://localhost:3002/api/v.1.0/3';

const getRums = async () => {
  
  const apiurl = api;

  try {
    const res = await fetch(apiurl);
    const data = await res.json();
    return data;
  }catch(e){
    console.log('Fetch Error', e);
  }
};

export default getRums;