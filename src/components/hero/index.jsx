import Button from "../button";
import styles from "./hero.module.scss";
import PropTypes from "prop-types";
import { FaPhoneAlt } from "react-icons/fa";

export default function Hero({ backgroundImg, header, fontSize }) {
  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className={fontSize && `${styles[fontSize]}`}>{header}</h1>
      <Button
        text="schedule"
        type="schedule"
        icon={<FaPhoneAlt />}
        phoneNumber="4257890001"
      />
    </div>
  );
}

Hero.propTypes = {
  backgroundImg: PropTypes.string,
  header: PropTypes.string,
  fontSize: PropTypes.string,
};
