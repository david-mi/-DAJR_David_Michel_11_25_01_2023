import React from 'react';
import styles from "./tags.module.scss";
import "../../../types";
import { TagsPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string[]} props.tags
 */

const Tags = ({ tags }) => {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  );
};

Tags.propTypes = TagsPropTypes;

export default Tags;