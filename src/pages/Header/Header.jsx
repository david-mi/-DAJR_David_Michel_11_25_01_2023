import React from 'react';
import styles from "./header.module.scss";
import { Nav, Logo } from "./index";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;