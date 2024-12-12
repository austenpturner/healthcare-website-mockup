import Button from "../button";
import PropTypes from "prop-types";
import styles from "./card.module.scss";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";

export default function Card({ content, handleAction }) {
  return (
    <div className={styles.card}>
      <TopCorners />
      <div className={styles.cardContent}>
        <h3>{content.heading}</h3>
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
      <BottomCorners />
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.object,
  handleAction: PropTypes.func,
};
