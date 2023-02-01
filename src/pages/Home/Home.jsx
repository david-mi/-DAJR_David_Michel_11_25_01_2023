import React from 'react';
import styles from "./home.module.scss";
import Gallery from "../../components/Gallery/Gallery";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <main className={styles.home}>
      <Banner title="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
};

export default Home;