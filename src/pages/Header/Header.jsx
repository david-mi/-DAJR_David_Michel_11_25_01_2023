import React from 'react';
import styles from "./header.module.scss";
import { Nav, KasaLogo } from "./index";

const Header = () => {
  return (
    <header className={styles.header}>
      <KasaLogo className={styles.logo} />
      <Nav />
    </header>
  );
};

export default Header;