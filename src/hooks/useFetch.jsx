import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isWatingFetch, setisWatingFetch] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setisWatingFetch(true);
        // simulating long wait from api
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok === false) {
          throw new Error("failed to fetch");
        }

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setisWatingFetch(false);
      }
    }

    getData();
  }, []);

  return { data, isWatingFetch, error };
};

export default useFetch;