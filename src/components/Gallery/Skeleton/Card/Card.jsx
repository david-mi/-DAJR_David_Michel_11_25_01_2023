import React from 'react';
import Loader from "../../../Loader/Loader";
import styles from "./card.module.scss";

/**
 * Empty card with a loader in it
 */

const Card = () => {
  return (
    <div className={styles.card}>
      <Loader />
    </div>
  );
};

export default Card;