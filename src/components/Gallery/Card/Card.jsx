import React from 'react';
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import "../../../types";
import { CardPropTypes } from "./propTypes";

/**
 * Card link with an image and title 
 * - Redirects on the lodging route on click with the lodging id as parameter
 * 
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