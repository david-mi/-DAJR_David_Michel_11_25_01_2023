import React from 'react';
import styles from "./about.module.scss";
import Collapses from "../../components/Collapses/Collapses";
import Banner from "../../components/Common/Banner/Banner";

const About = () => {
  return (
    <main className={styles.about}>
      <Banner />
      <Collapses />
    </main>
  );
};

export default About;