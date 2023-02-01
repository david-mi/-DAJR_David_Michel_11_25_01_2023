import React from 'react';
import styles from "./header.module.scss";
import { Nav } from "./index";
import KasaLogo from "../../components/svg/KasaLogo/KasaLogo";

const Header = () => {
  return (
    <header className={styles.header}>
      <KasaLogo className={styles.logo} />
      <Nav />
    </header>
  );
};

export default Header;