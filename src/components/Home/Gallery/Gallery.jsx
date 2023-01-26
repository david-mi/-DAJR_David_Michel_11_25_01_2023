import React from 'react';
import { Card } from "../index";
import styles from "./galery.module.scss";
import useFetch from "../../../hooks/useFetch";
import { logementsUrl } from "../../../urls";
import Skeleton from "./Skeleton/Skeleton";

const Gallery = () => {
  const { data, isLoading, error } = useFetch(logementsUrl);

  return (
    <div className={styles.gallery}>
      {error && error.message}
      {isLoading && <Skeleton size={9} />}
      {data.map((logement) => {
        return <Card key={logement.id} logement={logement} />;
      })}
    </div>
  );
};

export default Gallery;