import React from 'react';
import styles from "./title.module.scss";
import "../../../types";
import { TitlePropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.title
 */

const Title = ({ title }) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
};

Title.propTypes = TitlePropTypes;

export default Title;