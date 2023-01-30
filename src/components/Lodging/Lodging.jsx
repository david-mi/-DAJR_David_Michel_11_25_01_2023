import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./lodging.module.scss";
import useFetch from "../../hooks/useFetch";
import { lodgingsUrl } from "../../urls";
import NotFound from "../../pages/NotFound/NotFound";
import Loader from "../Loader/Loader";
import findLodgingById from "../../helpers/findLodgingById";

const Lodging = () => {
  const { id: lodgingId } = useParams();
  const { data: lodgings, isLoading, error } = useFetch(lodgingsUrl);
  const [lodging, setLodging] = useState({});

  useEffect(() => {
    if (isLoading === false) {
      console.log(lodgings);
      const foundLodging = findLodgingById(lodgings, lodgingId);
      setLodging(foundLodging);
    }
  }, [lodgings]);

  if (lodging === null) {
    return <NotFound />;
  }

  return (
    <main className={styles.lodging}>
      {error && error.message}
      {isLoading
        ? <Loader dotColor="black" />
        : "Carousel"
      }
    </main>
  );
};

export default Lodging;