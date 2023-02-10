import React from 'react';
import styles from "./home.module.scss";
import Gallery from "../../components/Gallery/Gallery";
import Banner from "../../components/Banner/Banner";
import bannerHomeImage from "../../assets/banner/home.jpg";
import useFetch from "../../hooks/useFetch";

const bannerHomeImageOptions = {
  src: bannerHomeImage,
  alt: "photo représentant un paysage côtier"
};


const Home = () => {
  const { data, isWaitingFetch, error } = useFetch();

  return (
    <main className={styles.home}>
      <Banner
        title="Chez vous, partout et ailleurs"
        image={bannerHomeImageOptions}
      />
      <Gallery fetchInfos={{ data, isWaitingFetch, error }} />
    </main>
  );
};

export default Home;