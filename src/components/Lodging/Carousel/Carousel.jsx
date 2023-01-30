import styles from "./carousel.module.scss";
import { PicturesWrapper } from "../index";

const Carousel = ({ pictures }) => {
  const hasMultiplePictures = pictures.length - 1 > 0;

  return (
    <div className={styles.carousel}>
      {hasMultiplePictures
        ? <PicturesWrapper pictures={pictures} />
        : <img src={pictures[0]} />
      }
    </div>
  );
};

export default Carousel;