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
  return (
    <div
      className={`${styles.blocksContainer} ${styles[reverse]} ${styles[maxWidth]}`}
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
