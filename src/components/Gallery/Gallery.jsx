import React from 'react';
import { Card, Skeleton } from "./index";
import styles from "./galery.module.scss";
import { GalleryPropTypes } from "./propTypes";

const Gallery = ({ fetchInfos }) => {
  const { data, isWaitingFetch, error } = fetchInfos;

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

Gallery.propTypes = GalleryPropTypes;

export default Gallery;