import React, { useEffect, useState } from 'react';
import styles from "./picturesWrapper.module.scss";
import { Button } from "../../index";

const PicturesWrapper = ({ pictures }) => {
  const [picture, setPicture] = useState(pictures[0]);
  const [pictureIndex, setPictureIndex] = useState(0);

  /** Set previous index in pictures array and get back to last index if previous index < 0 */
  function handlePreviousPicture() {
    if (pictureIndex <= 0) {
      return setPictureIndex(pictures.length - 1);
    }

    setPictureIndex((previousValue) => previousValue - 1);
  }

  /** Set next index in pictures array and get back to 0 if index reaches pictures length */
  function handleNextPicture() {
    setPictureIndex((previousValue) => (previousValue + 1) % pictures.length);
  }

  useEffect(() => {
    setPicture(pictures[pictureIndex]);
  }, [pictureIndex]);

  return (
    <>
      <Button options={{ handler: handlePreviousPicture, direction: "left" }} />
      <img src={picture} />
      <div className={styles.counter}>{pictureIndex + 1} / {pictures.length}</div>
      <Button options={{ handler: handleNextPicture, direction: "right" }} />
    </>
  );
};

export default PicturesWrapper;