import { useEffect, useState } from 'react';
import { lodgingServices } from "../services/lodging";
import "../types";

/**
 * Custom Hook to handle fetch calls
 * - While waiting for service response, {@link isWaitingFetch} is set to true
 * - If service throws an error, a new {@link error} is set
 * - If service returns data, setting it to {@link data}
 * 
 * @param {string} lodgingId
 * @returns {{
 *  data: null | Lodgings | Lodging,
 *  error: null | Error,
 *  isWaitingFetch: boolean
 * }}
 */

const useFetch = (lodgingId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isWaitingFetch, setIsWaitingFetch] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setIsWaitingFetch(true);
        // simulating long wait from api
        await new Promise((resolve) => setTimeout(resolve, 1000));

        let apiData = "";

        if (lodgingId) {
          apiData = await lodgingServices.getLodgingById(lodgingId);
        } else {
          apiData = await lodgingServices.getAllLodgings();
        }

        setData(apiData);
      } catch (error) {
        setError(error);
      } finally {
        setIsWaitingFetch(false);
      }
    }

    getData();
  }, []);

  return { data, isWaitingFetch, error };
};

export default useFetch;