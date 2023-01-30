import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
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
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;