import React from 'react';

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