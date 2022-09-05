import {useState, useEffect} from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  const abortCont = new AbortController();
  setTimeout(() => {
    fetch(url, {
      headers: {
        "Content-type" : "application/json"
      }
    }, { signal: abortCont.signal })
    .then(res => {
      console.log(res)
      if (!res.ok) { 
        //kan inte hämta  från servern:
        throw Error('Kunde inte hämta från servern!');
      } 
      return res.json();
    })
    .then(data => {
      setIsLoading(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('Kunde inte göra Fetch')
        
      } else {
        setIsLoading(false);
        setError(err.message);
      }
    })
  }, 1000);
  return () => abortCont.abort();
}, [url])
return { data, isLoading, error };
}

export default useFetch;