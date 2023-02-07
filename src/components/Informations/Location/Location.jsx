import React from 'react';
import styles from "./location.module.scss";
import "../../../types";

/**
 *  @param { Lodging } location
 */

const Location = ({ location }) => {
  return (
    <h3 className={styles.location}>{location}</h3>
  );
};

export default Location;