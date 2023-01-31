import React from 'react';
import styles from "./picture.module.scss";
import bannerHome from "./home.jpg";

const Picture = () => {
  return (
    <div className={styles.container}>
      <img src={bannerPicture} />
    </div>
  );
};

export default Picture;