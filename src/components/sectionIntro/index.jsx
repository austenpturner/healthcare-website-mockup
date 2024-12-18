import PropTypes from "prop-types";
import styles from "./sectionIntro.module.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function SectionIntro({ content, alignment }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      className={`${styles.sectionIntro} ${isVisible ? "visible" : "hidden"}`}
      ref={elementRef}
    >
      <h2 className={`${alignment && styles[alignment]}`}>{content.header}</h2>
      <p className={`${styles.intro} ${alignment && styles[alignment]}`}>
        {content.para}
      </p>
    </div>
  );
}

SectionIntro.propTypes = {
  content: PropTypes.object,
  alignment: PropTypes.string,
};
