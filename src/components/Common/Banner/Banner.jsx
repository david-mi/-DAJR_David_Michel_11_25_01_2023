import React from 'react';
import styles from "./banner.module.scss";

import { Picture } from "./index";

const Banner = ({ title }) => {
  return (
    <div className={styles.banner}>
      <Picture />
      {title && <h1 className={styles.expression}>{title}</h1>}
    </div>
  );
};

export default Banner;