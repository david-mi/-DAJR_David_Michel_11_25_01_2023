import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./picture.module.scss";
import bannerHome from "./home.jpg";
import bannerAbout from "./about.jpg";

const Picture = () => {
  const { pathname } = useLocation();
  const imageSrc = pathname === "/"
    ? bannerHome
    : bannerAbout;

  return (
    <div className={styles.container}>
      <img src={imageSrc} />
    </div>
  );
};

export default Picture;