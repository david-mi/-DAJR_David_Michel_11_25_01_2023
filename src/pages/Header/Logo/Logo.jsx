import React from 'react';
import styles from "./logo.module.scss";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="kasa, location d’appartements entre particuliers" />
    </div>
  );
};

export default Logo;