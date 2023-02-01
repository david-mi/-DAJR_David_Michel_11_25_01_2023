import React from 'react';
import styles from "./header.module.scss";
import { Nav } from "./index";
import KasaLogo from "../../components/svg/KasaLogo/KasaLogo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <KasaLogo className={styles.logo} />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;