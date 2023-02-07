import React from 'react';
import styles from "./picture.module.scss";

/**
 * @param {{
 *   src: string
 *   alt: string
 * }}
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

export default Picture;