import { Link } from "react-router-dom";
import styles from "./logo.module.scss";
import PropTypes from "prop-types";
import logo from "../../assets/logo/logo.png";

export default function Logo({ size, alignment }) {
  return (
    <Link
      className={`${styles.logoContainer} ${styles[size]} ${styles[alignment]}`}
      to={"/"}
    >
      <img src={logo} alt="logo" />
      <span>Pacific Therapy</span>
    </Link>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
  alignment: PropTypes.string,
};
