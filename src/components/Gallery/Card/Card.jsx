import React from 'react';
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import "../../../types";
import { CardPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {Lodging} props.lodging
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

Card.propTypes = CardPropTypes;

export default Card;