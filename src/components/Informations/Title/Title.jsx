import React from 'react';
import styles from "./title.module.scss";
import "../../../types";

/**
 *  @param { Lodging } title
 */

const Title = ({ title }) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
};

export default Title;