import React from 'react';
import style from "./name.module.scss";

const Name = ({ name }) => {
  return (
    <div className={style.name}>{name}</div>
  );
};

export default Name;