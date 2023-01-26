import React from 'react';
import styles from "./home.module.scss";
import { Banner } from "./index";

const Home = () => {
  return (
    <main className={styles.home}>
      <Banner />
    </main>
  );
};

export default Home;