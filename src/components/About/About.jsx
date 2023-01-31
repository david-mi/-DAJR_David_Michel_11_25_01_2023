import React from 'react';
import styles from "./about.module.scss";
import { Collapses } from "./index";
import Banner from "../Common/Banner/Banner";

const About = () => {
  return (
    <main className={styles.about}>
      <Banner />
      <Collapses />
    </main>
  );
};

export default About;