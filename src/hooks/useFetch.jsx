import { useEffect, useState } from 'react';
import { lodgingServices } from "../services/lodging";

const useFetch = (lodgingId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isWatingFetch, setisWatingFetch] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setisWatingFetch(true);
        // simulating long wait from api
        await new Promise((resolve) => setTimeout(resolve, 1000));

        let apiData = "";

        if (lodgingId) {
          apiData = await lodgingServices.getOneLodging(lodgingId);
        } else {
          apiData = await lodgingServices.getAllLodgings();
        }

        setData(apiData);
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