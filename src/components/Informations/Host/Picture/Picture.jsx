import React from 'react';
import styles from "./picture.module.scss";
import "../../../../types";

/**
 *  @param { Lodging } host
 */

const Picture = ({ host }) => {
  return (
    <div className={styles.container}>
      <img src={host.picture} alt={host.name} />
    </div>
  );
};

export default Picture;