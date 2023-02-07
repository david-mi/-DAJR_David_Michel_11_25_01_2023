import React, { useEffect, useState } from 'react';
import styles from "./carousel.module.scss";
import { BrowseButton, Picture } from "./index";
import "../../../types";

/**
 *  @param { Lodging } pictures
 */

const Carousel = ({ pictures }) => {
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
    <div className={styles.carousel}>
      <BrowseButton options={{ handler: handlePreviousPicture, direction: "left" }} />
      <Picture src={picture} key={picture} alt={"photo de la location " + (pictureIndex + 1)} />
      <div className={styles.counter}>{pictureIndex + 1} / {pictures.length}</div>
      <BrowseButton options={{ handler: handleNextPicture, direction: "right" }} />
    </div>
  );
};

export default Carousel;