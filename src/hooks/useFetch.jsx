import { useEffect, useState } from 'react';
import { lodgingServices } from "../services/lodging";
import "../types";

/**
 * @typedef {Object} useFetchReturn
 * @property {Lodgings | Lodging | null}  data
 * @property {boolean} isWaitingFetch
 * @property {Error | null} error
 */

/**
 * Custom Hook to handle fetch calls
 * - While waiting for service response, {@link isWaitingFetch} is set to true
 * - If service throws an error, a new {@link error} is set
 * - If service returns data, setting it to {@link data}
 * 
 * @param {string=} lodgingId
 * @returns {useFetchReturn}
 */


const useFetch = (lodgingId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isWaitingFetch, setIsWaitingFetch] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setIsWaitingFetch(true);

        let apiData = null;

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