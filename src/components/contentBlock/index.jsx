import Button from "../button";
import styles from "./contentBlock.module.scss";
import PropTypes from "prop-types";

export default function ContentBlock({ content }) {
  return (
    <div className={styles.block}>
      <div className={styles.headerContainer}>
        <span className={`${styles.corner} ${styles.topLeftCorner}`}></span>
        <h2>{content.title}</h2>
        <span className={`${styles.corner} ${styles.topRightCorner}`}></span>
      </div>
      <div className={styles.contentContainer}>
        <span className={`${styles.corner} ${styles.bottomLeftCorner}`}></span>
        <div className={styles.content}>
          {content.content.map((obj) => {
            const { id, para } = obj;
            return <p key={id}>{para}</p>;
          })}
          <Button text={content.button.text} type={content.button.type} />
        </div>
        <span className={`${styles.corner} ${styles.bottomRightCorner}`}></span>
      </div>
    </div>
  );
}

ContentBlock.propTypes = {
  content: PropTypes.object,
};
