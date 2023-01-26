import React from 'react';
import { Card } from "../index";
import styles from "./galery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Gallery;