import React from 'react';
import styles from "./notFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retouner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;