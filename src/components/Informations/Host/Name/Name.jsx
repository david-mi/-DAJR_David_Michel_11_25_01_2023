import React from 'react';
import style from "./name.module.scss";

import "../../../../types";

/**
 *  @param { Host } name
 */

const Name = ({ name }) => {
  return (
    <div className={style.name}>{name}</div>
  );
};

export default Name;