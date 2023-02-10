import React from "react";
import styles from "./loader.module.scss";
import { LoaderPropTypes } from "./propTypes";

/**  
 * @param {Object} props
 * @param {string} [props.dotColor = white]
 */

const Loader = ({ dotColor = "white" }) => {
  const numberOfDots = 12;
  const dotsJsx = Array(numberOfDots)
    .fill(null)
    .map((_, index) => <div key={index} style={{ background: dotColor }}></div>);

  return (
    <div className={styles.loader}>
      {dotsJsx}
    </div>
  );
};

Loader.propTypes = LoaderPropTypes;

export default Loader;