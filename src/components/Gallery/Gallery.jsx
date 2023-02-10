import React from 'react';
import { Card, Skeleton } from "./index";
import styles from "./galery.module.scss";
import { GalleryPropTypes } from "./propTypes";
import "../../types";

/**
 * Show Skeleton component while waiting for {@link data}
 * Show Gallery component once data arrived
 * If an error occurs, shows it
 * 
 * @param {Object} props
 * @param {Object} props.fetchInfos
 * @param {Lodgings | null}  props.fetchInfos.data
 * @param {boolean} props.fetchInfos.isWaitingFetch
 * @param {Error | null} props.fetchInfos.error
 */

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