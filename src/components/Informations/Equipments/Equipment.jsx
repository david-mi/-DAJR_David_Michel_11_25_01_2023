import React from 'react';
import "../../../types";

/**
 *  @param { Lodging } equipments
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

export default Equipments;