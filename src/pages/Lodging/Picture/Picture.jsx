import React from 'react';
import styles from "./picture.module.scss";
import { PicturePropType } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.src
 * @param {string} props.alt
 */

const Picture = ({ src, alt }) => {
  return (
    <img
      className={styles.picture}
      src={src}
      alt={alt}
    />
  );
};

Picture.propType = PicturePropType;

export default Picture;