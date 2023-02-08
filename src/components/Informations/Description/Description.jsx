import React from 'react';
import "../../../types";
import { DescriptionPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.description
 */

const Description = ({ description }) => {
  return (
    <p>{description}</p>
  );
};

Description.propTypes = DescriptionPropTypes;

export default Description;