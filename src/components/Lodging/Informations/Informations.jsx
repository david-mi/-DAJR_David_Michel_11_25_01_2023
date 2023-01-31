import React from 'react';
import styles from "./informations.module.scss";
import { Title, Location } from "./index";

const Informations = ({ lodging }) => {
  const { title, location, host, tags, rating, description, equipment } = lodging;

  return (
    <div className={styles.informations}>
      <Title title={title} />
      <Location location={location} />
    </div>
  );
};

export default Informations;