import React from 'react';
import styles from "./rating.module.scss";
import { StarIcon } from "./index";
import "../../../types";

/**
 *  @param { Lodging } rating
 */

const Rating = ({ rating }) => {
  const ratingNumber = parseInt(rating, 10);

  const starsJsx = new Array(5)
    .fill(null)
    .map((_, index) => {
      const starClassName = index + 1 <= ratingNumber
        ? "full"
        : "empty";

      return <StarIcon key={index} className={starClassName} />;
    });

  return (
    <div className={styles.rating}>
      {starsJsx}
    </div>
  );
};

export default Rating;