import React from 'react';
import styles from "./browseButton.module.scss";
import ArrowIcon from "../../svg/ArrowIcon/ArrowIcon";
import { BrowseButtonPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {Object} props.options
 * @param {() => any} props.options.handler
 * @param {"left" | "right"} props.options.direction
 * @param {boolean=} props.options.display
 */

const BrowseButton = ({ options }) => {
  const { handler, direction, display } = options;
  const buttonClass = display ? "hide" : "";

  return (
    <button onClick={handler} className={styles[buttonClass]}>
      <ArrowIcon className={`${styles.arrow} ${styles[direction]}`} />
    </button>
  );
};

BrowseButton.propTypes = BrowseButtonPropTypes;

export default BrowseButton;