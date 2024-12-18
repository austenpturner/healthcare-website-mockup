import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import ContentBlock from "../contentBlock";
import styles from "./blocks.module.scss";
import PropTypes from "prop-types";

export default function Blocks({
  content,
  maxHeight,
  reverse,
  maxWidth,
  aspectRatio,
}) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 15% of the component is visible
  });

  return (
    <div
      ref={elementRef}
      className={`${styles.blocksContainer} ${styles[reverse]} ${
        styles[maxWidth]
      } ${isVisible ? "visible" : "hidden"}`}
    >
      <ContentBlock
        content={content.sections}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        key={content.index}
      />
      <img
        src={content.img.src}
        alt={content.img.alt}
        className={`${styles[maxHeight]} ${styles[aspectRatio]}`}
      />
    </div>
  );
}

Blocks.propTypes = {
  content: PropTypes.object,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  reverse: PropTypes.string,
  aspectRatio: PropTypes.string,
};
