import styles from "./loader.module.scss";

const Loader = ({ dotColor = "white" }) => {
  const numberOfDots = 12;
  const dotsJsx = Array(numberOfDots)
    .fill(null)
    .map((_, index) => <div key={index} style={{ background: dotColor }}></div>);

  return (
    <div className={styles.loader}>
      {dotsJsx}
    </div>
  );
};

export default Loader;