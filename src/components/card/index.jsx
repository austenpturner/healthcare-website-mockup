import Button from "../button";
import PropTypes from "prop-types";
import styles from "./card.module.scss";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Card({ content, handleAction }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      className={`${styles.card} ${isVisible ? "visible" : "hidden"}`}
      ref={elementRef}
    >
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
