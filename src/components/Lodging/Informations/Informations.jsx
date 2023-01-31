import React from 'react';
import styles from "./informations.module.scss";

const Informations = ({ lodging }) => {
  const { title, location, host, tags, rating, description, equipment } = lodging;

  return (
    <div className={styles.informations}>

    </div>
  );
};

export default Informations;