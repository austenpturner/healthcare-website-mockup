import { IoLocationSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./directions.module.scss";

export default function Directions({ content }) {
  return (
    <div className={styles.directionsContainer}>
      <p className={styles.address}>
        <IoLocationSharp />
        {content.address}
      </p>
      <p>
        {`Get directions: `}
        <a href={content.googleMapsLink} target="_blank">
          Google Maps
        </a>
      </p>
      <iframe
        src={content.embeddedMapsSrc}
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <p className={styles.callForHelp}>
        *Please call our office if you need help with directions. Our team will
        be happy to assist you to the best of their ability.
      </p>
    </div>
  );
}

Directions.propTypes = {
  content: PropTypes.object,
};
