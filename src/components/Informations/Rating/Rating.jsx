import React from 'react';
import styles from "./rating.module.scss";
import { StarIcon } from "./index";
import "../../../types";
import { RatingPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.rating
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

Rating.propTypes = RatingPropTypes;

export default Rating;