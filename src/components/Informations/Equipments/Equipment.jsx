import React from 'react';
import "../../../types";
import { EquipmentsPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string[]} props.equipments
 */

const Equipments = ({ equipments }) => {
  return (
    <ul>
      {equipments.map((equipment) => {
        return <li key={equipment}>{equipment}</li>;
      })}
    </ul>
  );
};

Equipments.propTypes = EquipmentsPropTypes;

export default Equipments;