import React from 'react';
import styles from "./tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  );
};

export default Tags;