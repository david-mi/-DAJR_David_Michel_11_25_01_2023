import React from 'react';
import styles from "./collapses.module.scss";
import Collapse from "../Collapse/Collapse";
import { CollapsesPropTypes } from "./propTypes";

/**
 * @typedef {Object} data
 * @property {string} name
 * @property {string} content
 */

/**
 * Create a Collapse component for each element in {@link data}
 * 
 * @param {Object} props
 * @param {Array<data>} props.data
 */

const Collapses = ({ data }) => {
  return (
    <section className={styles.collapses}>
      {data.map(({ name, content }, index) => {
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

Collapses.propTypes = CollapsesPropTypes;

export default Collapses;