import React from 'react';
import styles from "./dropDownButton.module.scss";
import ArrowIcon from "../../svg/ArrowIcon/ArrowIcon";

/**
 * @param {{
 *  name: string,
 *  showContent: boolean,
 *  setShowContent: React.Dispatch<React.SetStateAction<boolean>>
 * }}
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

export default Button;