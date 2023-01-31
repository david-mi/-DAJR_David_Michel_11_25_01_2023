import React from 'react';
import styles from "./location.module.scss";

const Location = ({ location }) => {
  return (
    <h3 className={styles.location}>{location}</h3>
  );
};

export default Location;