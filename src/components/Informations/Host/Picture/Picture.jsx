import React from 'react';
import styles from "./picture.module.scss";
import "../../../../types";
import { PicturePropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {Host} props.host
 */

const Picture = ({ host }) => {
  return (
    <div className={styles.container}>
      <img src={host.picture} alt={host.name} />
    </div>
  );
};

Picture.propTypes = PicturePropTypes;

export default Picture;