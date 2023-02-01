import React from 'react';
import styles from "./picture.module.scss";

const Picture = ({ image }) => {
  const { src, alt } = image;

  return (
    <div className={styles.container}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Picture;