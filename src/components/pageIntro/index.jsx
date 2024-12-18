import PropTypes from "prop-types";
import styles from "./intro.module.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function PageIntro({ content }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });
  return (
    <section
      className={`${styles.intro} ${isVisible ? "visible" : "hidden"}`}
      ref={elementRef}
    >
      <h2>{content.header}</h2>
      {content.secondHeader && <h3>{content.secondHeader}</h3>}
      <p>{content.para}</p>
    </section>
  );
}

PageIntro.propTypes = {
  content: PropTypes.object,
};
