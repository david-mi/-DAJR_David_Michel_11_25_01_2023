import React from 'react';
import styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" alt="" />
      <h2>Titre de la location</h2>
    </div>
  );
};

export default Card;