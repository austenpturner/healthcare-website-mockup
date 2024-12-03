import styles from "./headerContainer.module.scss";
import PropTypes from "prop-types";

export default function HeaderContainer({ backgroundImg, header }) {
  return (
    <div
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1>{header}</h1>
    </div>
  );
}

HeaderContainer.propTypes = {
  backgroundImg: PropTypes.string,
  header: PropTypes.string,
};
