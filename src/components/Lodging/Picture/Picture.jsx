import React from 'react';
import styles from "./picture.module.scss";

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