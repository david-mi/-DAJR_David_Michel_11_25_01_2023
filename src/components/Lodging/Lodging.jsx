import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./lodging.module.scss";
import useFetch from "../../hooks/useFetch";
import { lodgingsUrl } from "../../urls";
import NotFound from "../../pages/NotFound/NotFound";
import Loader from "../Loader/Loader";
import findLodgingById from "../../helpers/findLodgingById";
import { Carousel } from "./index";

const Lodging = () => {
  const { id: lodgingId } = useParams();
  const { data: lodgings, isWatingFetch, error } = useFetch(lodgingsUrl);
  const [lodging, setLodging] = useState("pending");

  const hasMultiplePictures = lodgings.length > 0;

  useEffect(() => {
    if (isWatingFetch === false) {
      const foundLodging = findLodgingById(lodgings, lodgingId);
      setLodging(foundLodging);
    }
  }, [lodgings]);

  if (lodging === null) {
    return <NotFound />;
  }

  if (lodging === "pending") {
    return <Loader dotColor="black" />;
  }

  if (error) {
    return error.message;
  }

  return (
    <main className={styles.lodging}>
      {hasMultiplePictures
        ? <Carousel pictures={lodging.pictures} />
        : <img src={lodging.pictures[0]} />
      }
    </main>
  );
};

export default Lodging;