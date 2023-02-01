import React from 'react';
import styles from "./about.module.scss";
import Collapses from "../../components/Collapses/Collapses";
import Banner from "../../components/Banner/Banner";
import bannerAboutImage from "../../assets/banner/about.jpg";

const bannerAboutImageOptions = {
  src: bannerAboutImage,
  alt: "photo représentant un paysage montagneux"
};

const About = () => {
  return (
    <main className={styles.about}>
      <Banner image={bannerAboutImageOptions} />
      <Collapses />
    </main>
  );
};

export default About;