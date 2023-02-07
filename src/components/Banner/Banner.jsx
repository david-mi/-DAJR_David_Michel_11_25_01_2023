import React from 'react';
import styles from "./banner.module.scss";

import { Picture } from "./index";

/**
 * @param {{
 *  title: string
 *  image: string
 * }} 
 */

const Banner = ({ title, image }) => {
  return (
    <div className={styles.banner}>
      <Picture image={image} />
      {title && <h1 className={styles.expression}>{title}</h1>}
    </div>
  );
};

export default Banner;