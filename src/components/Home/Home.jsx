import React from 'react';
import styles from "./home.module.scss";
import { Banner, Gallery } from "./index";

const Home = () => {
  return (
    <main className={styles.home}>
      <Banner />
      <Gallery />
    </main>
  );
};

export default Home;