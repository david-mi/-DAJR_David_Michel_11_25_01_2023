import React from 'react';
import style from "./name.module.scss";
import "../../../../types";
import { NamePropType } from "./propTypes";

/**
 *  @param {Object} props
 * @param {string} props.name
 */

const Name = ({ name }) => {
  return (
    <div className={style.name}>{name}</div>
  );
};

Name.propTypes = NamePropType;

export default Name;