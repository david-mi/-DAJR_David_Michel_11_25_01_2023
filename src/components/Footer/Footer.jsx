import React from 'react';
import styles from "./footer.module.scss";
import { FooterPropTypes } from "./propTypes";

/**
 * Create a Footer component which takes a React ElementType as a children
 * 
 * @param {Object} props
 * @param {React.ElementType} props.Logo
 */


const Footer = ({ Logo }) => {
  return (
    <footer className={styles.footer}>
      {<Logo className={styles.logo} />}
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

Footer.propTypes = FooterPropTypes;

export default Footer;