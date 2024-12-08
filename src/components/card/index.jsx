import Button from "../button";
import PropTypes from "prop-types";
import styles from "./card.module.scss";

export default function Card({ content, handleAction }) {
  return (
    <div className={styles.card}>
      <h3>{content.heading}</h3>
      <div className={styles.cardContent}>
        <p>{content.description}</p>
        {content.button && (
          <Button
            text={content.button.text}
            type="link"
            link={content.button.link}
            handleAction={handleAction}
          />
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.object,
  handleAction: PropTypes.func,
};
