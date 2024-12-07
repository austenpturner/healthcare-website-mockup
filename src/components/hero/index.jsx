import styles from "./hero.module.scss";
import PropTypes from "prop-types";

export default function Hero({ backgroundImg, header, fontSize }) {
  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className={fontSize && `${styles[fontSize]}`}>{header}</h1>
    </div>
  );
}

Hero.propTypes = {
  backgroundImg: PropTypes.string,
  header: PropTypes.string,
  fontSize: PropTypes.string,
};
