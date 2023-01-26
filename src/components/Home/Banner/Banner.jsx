import React from 'react';
import styles from "./banner.module.scss";

import { Picture } from "../index";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Picture />
      <p className={styles.expression}>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;