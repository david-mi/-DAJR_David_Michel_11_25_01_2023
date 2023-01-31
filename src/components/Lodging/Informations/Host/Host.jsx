import React from 'react';
import styles from "./host.module.scss";
import { Picture, Name } from "./index";

const Host = ({ host }) => {
  return (
    <div className={styles.host}>
      <Name name={host.name} />
      <Picture host={host} />
    </div>
  );
};

export default Host;