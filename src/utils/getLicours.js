const apifilter = 'http://localhost:3002/api/v.1.0/1';

const getLicours = async () => {
  
  const apiurl = apifilter;

  try {
    const res = await fetch(apiurl);
    const data = await res.json();
    return data;
  }catch(e){
    console.log('Fetch Error', e);
  }
};

export default getLicours;