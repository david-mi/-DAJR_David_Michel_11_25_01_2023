import React from 'react';
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import "../../../types";

/**
 * @param {{
 *  lodging: Lodging
 * }}
 */

const Card = ({ lodging }) => {
  const { id, title, cover, description } = lodging;

  return (
    <Link to={id} className={styles.link}>
      <img src={cover} alt={description} />
      <h2>{title}</h2>
    </Link>
  );
};

export default Card;