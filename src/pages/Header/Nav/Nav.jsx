import React from 'react';
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/about">A Propos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;