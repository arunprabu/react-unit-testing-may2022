// this is util fn. not custom hook. this needs api url as arg 
export const fetchAPI = (url) => {
  return fetch(url)
  .then((res) => {

    if(res.status === 200){
      return res.json()
    }else{
      throw new Error('Invalid Resp');
    }
  })
  .catch((err) => {
    
  });

}