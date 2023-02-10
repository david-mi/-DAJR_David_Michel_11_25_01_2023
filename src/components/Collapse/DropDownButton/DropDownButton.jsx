import React from 'react';
import styles from "./dropDownButton.module.scss";
import ArrowIcon from "../../svg/ArrowIcon/ArrowIcon";
import { DropDownButtonPropTypes } from "./propTypes";

/**
 * Button to show or hide collapse content
 * 
 * @param {Object} props
 * @param {string} props.name
 * @param {boolean} props.showContent
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setShowContent
 */

const Button = ({ name, showContent, setShowContent }) => {
  const buttonClassName = `${styles.button} ${showContent ? styles.show : ""}`;

  return (
    <button className={buttonClassName} onClick={() => setShowContent((previous) => !previous)}>
      <p>{name}</p>
      <ArrowIcon className={styles.icon} />
    </button>
  );
};

Button.propTypes = DropDownButtonPropTypes;

export default Button;