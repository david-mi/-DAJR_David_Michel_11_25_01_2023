import React from 'react';
import styles from "./collapses.module.scss";
import Collapse from "../Collapse/Collapse";
import { aboutData } from "./data";

/** Create a Collapse component for each element in {@link aboutData}*/

const Collapses = () => {
  return (
    <section className={styles.collapses}>
      {aboutData.map(({ name, content }, index) => {
        return (
          <Collapse
            key={name}
            name={name}
            showByDefault={index === 0 ? true : false}
          >
            <p>{content}</p>
          </Collapse>
        );
      })}
    </section>
  );
};

export default Collapses;