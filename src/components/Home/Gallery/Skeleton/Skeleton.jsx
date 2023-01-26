import React from 'react';
import SkeletonCard from "./Card/Card";

const Skeleton = ({ size }) => {
  const skeletonArray = new Array(size).fill("");

  return (
    <>
      {skeletonArray.map(() => {
        return <SkeletonCard key={Math.random()} />;
      })}
    </>
  );
};

export default Skeleton;