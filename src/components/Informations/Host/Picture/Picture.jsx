import React from 'react';
import styles from "./picture.module.scss";

const Picture = ({ host }) => {
  return (
    <div className={styles.container}>
      <img src={host.picture} alt={host.name} />
    </div>
  );
};

export default Picture;