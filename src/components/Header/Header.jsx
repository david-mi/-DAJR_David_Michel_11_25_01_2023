import React from 'react';
import styles from "./header.module.scss";
import { Nav } from "./index";
import { Link } from "react-router-dom";
import { HeaderPropTypes } from "./propTypes";

/**
 * Create a Header component which takes a React ElementType as a children
 * 
 * @param {Object} props
 * @param {React.ElementType} props.Logo
 */

const Header = ({ Logo }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        {<Logo className={styles.logo} />}
      </Link>
      <Nav />
    </header>
  );
};

Header.propTypes = HeaderPropTypes;

export default Header;