import React from 'react';
import styles from "./location.module.scss";
import "../../../types";
import { LocationPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.location
 */

const Location = ({ location }) => {
  return (
    <h3 className={styles.location}>{location}</h3>
  );
};

Location.propTypes = LocationPropTypes;

export default Location;