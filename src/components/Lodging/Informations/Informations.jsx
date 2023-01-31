import React from 'react';
import styles from "./informations.module.scss";
import { Title } from "./index";

const Informations = ({ lodging }) => {
  const { title, location, host, tags, rating, description, equipment } = lodging;

  return (
    <div className={styles.informations}>
      <Title title={title} />
    </div>
  );
};

export default Informations;