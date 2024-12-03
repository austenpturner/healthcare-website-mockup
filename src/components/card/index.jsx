import Button from "../button";
import PropTypes from "prop-types";
import styles from "./card.module.scss";

export default function Card({ content }) {
  return (
    <div className={styles.card}>
      <h3>{content.heading}</h3>
      <div className={styles.cardContent}>
        <p>{content.description}</p>
        <Button text="learn more" type="link" />
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.object,
};
