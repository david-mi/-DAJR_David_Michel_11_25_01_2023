import React from 'react';
import styles from "./picture.module.scss";
import { PicturePropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {Object} props.image
 * @param {string} props.image.src
 * @param {string} props.image.alt
 */

const Picture = ({ image }) => {
  const { src, alt } = image;

  return (
    <div className={styles.container}>
      <img src={src} alt={alt} />
    </div>
  );
};

Picture.propTypes = PicturePropTypes;

export default Picture;