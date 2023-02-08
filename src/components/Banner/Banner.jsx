import React from 'react';
import styles from "./banner.module.scss";
import { BannerPropTypes } from "./propTypes";

import { Picture } from "./index";

/**
 * @param {Object} props
 * @param {string=} props.title
 * @param {Object} props.image
 * @param {string} props.image.src
 * @param {string} props.image.alt
 */

const Banner = ({ title, image }) => {
  return (
    <div className={styles.banner}>
      <Picture image={image} />
      {title && <h1 className={styles.expression}>{title}</h1>}
    </div>
  );
};

Banner.propTypes = BannerPropTypes;

export default Banner;