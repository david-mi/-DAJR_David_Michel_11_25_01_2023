import React from 'react';
import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ logement }) => {
  const { id, title, cover, description } = logement;

  return (
    <Link to={id} className={styles.link}>
      <img src={cover} alt={description} />
      <h2>{title}</h2>
    </Link>
  );
};

export default Card;