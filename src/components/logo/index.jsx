import { Link } from "react-router-dom";
import styles from "./logo.module.scss";
import PropTypes from "prop-types";

export default function Logo({ location }) {
  return (
    <Link
      className={`${styles.logoContainer} ${styles[`${location}`]}`}
      to={"/"}
    >
      <img src="src/assets/logo/logo.png" alt="logo" />
      <span>Pacific Therapy</span>
    </Link>
  );
}

Logo.propTypes = {
  location: PropTypes.string,
};
