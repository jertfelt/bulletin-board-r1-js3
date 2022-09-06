import {useState, useEffect} from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch("http://localhost:8000/faq").then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    setData(data);
  })
  .catch(err => {
    setError(err.message);
    console.log(error);
  })
})

return { data, isLoading, error };
}

export default useFetch;