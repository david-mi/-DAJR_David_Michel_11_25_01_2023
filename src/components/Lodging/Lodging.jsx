import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./lodging.module.scss";
import useFetch from "../../hooks/useFetch";
import { lodgingsUrl } from "../../urls";
import findLodgingById from "../../helpers/findLodgingById";
import NotFound from "../../pages/NotFound/NotFound";
import Loader from "../Loader/Loader";
import { Carousel, Picture } from "./index";
import Informations from "../Informations/Informations";

const Lodging = () => {
  const { id: lodgingId } = useParams();
  const { data: lodging, isWatingFetch, error } = useFetch(lodgingId);
  const [hasMultiplePictures, setHasMultiplePictures] = useState(false);

  useEffect(() => {
    if (lodging !== null) {
      setHasMultiplePictures(lodging.pictures.length > 1);
    }
  }, [lodging]);

  if (isWatingFetch) {
    return <Loader dotColor="black" />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <main className={styles.lodging}>
      {hasMultiplePictures
        ? <Carousel pictures={lodging.pictures} />
        : <Picture src={lodging.pictures[0]} alt="photo de la location" />
      }
      <Informations lodging={lodging} />
    </main>
  );
};

export default Lodging;