import BottomCorners from "../corners/bottomCorners";
import TopCorners from "../corners/topCorners";
import PropTypes from "prop-types";
import styles from "./tab.module.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Tab({ content }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
  });

  return (
    <div
      key={content.id}
      className={`${styles.option} ${isVisible ? "visible" : "hidden"}`}
      ref={elementRef}
    >
      <h3>{content.heading}</h3>
      <div className={styles.descriptionContainer}>
        <TopCorners />
        <p>{content.description}</p>
        <BottomCorners />
      </div>
    </div>
  );
}

Tab.propTypes = {
  content: PropTypes.object,
};
