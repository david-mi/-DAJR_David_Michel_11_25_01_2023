import React from 'react';
import { Card, Skeleton } from "./index";
import styles from "./galery.module.scss";
import useFetch from "../../hooks/useFetch";

const Gallery = () => {
  const { data, isWaitingFetch, error } = useFetch();

  return (
    <div className={styles.gallery}>
      {error && error.message}
      {isWaitingFetch && <Skeleton length={9} />}
      {data && data.map((lodging) => {
        return <Card key={lodging.id} lodging={lodging} />;
      })}
    </div>
  );
};

export default Gallery;