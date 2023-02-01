import React from 'react';
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;