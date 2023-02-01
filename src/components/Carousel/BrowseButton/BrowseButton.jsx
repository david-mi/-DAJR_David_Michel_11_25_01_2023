import React from 'react';
import styles from "./browseButton.module.scss";
import ArrowIcon from "../../svg/ArrowIcon/ArrowIcon";

const Button = ({ options }) => {
  const { handler, direction, display } = options;
  const buttonClass = display ? "hide" : "";

  return (
    <button onClick={handler} className={styles[buttonClass]}>
      <ArrowIcon
        className={`${styles.arrow} ${styles[direction]}`}
        role="button"
      />
    </button>
  );
};

export default Button;