import React from 'react';
import SkeletonCard from "./Card/Card";

/**
 * @param {number} length length of skeletonArray
 */

const Skeleton = ({ length }) => {
  const skeletonArray = new Array(length).fill("");

  return (
    <>
      {skeletonArray.map(() => {
        return <SkeletonCard key={Math.random()} />;
      })}
    </>
  );
};

export default Skeleton;