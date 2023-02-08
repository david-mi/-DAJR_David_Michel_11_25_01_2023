import React from 'react';
import styles from "./host.module.scss";
import { Picture, Name } from "./index";
import "../../../types";
import { HostPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {Host} props.host
 */

const Host = ({ host }) => {
  return (
    <div className={styles.host}>
      <Name name={host.name} />
      <Picture host={host} />
    </div>
  );
};

Host.propTypes = HostPropTypes;

export default Host;