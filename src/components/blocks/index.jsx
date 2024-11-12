import Button from "../button";
import styles from "./blocks.module.scss";
import PropTypes from "prop-types";

export default function Blocks({ content }) {
  return (
    <div className={styles.blocksContainer}>
      {content.map((block) => {
        return (
          <div key={block.id} className={styles.block}>
            <div className={styles.headerContainer}>
              <span
                className={`${styles.corner} ${styles.topLeftCorner}`}
              ></span>
              <h2>{block.title}</h2>
              <span
                className={`${styles.corner} ${styles.topRightCorner}`}
              ></span>
            </div>
            <div className={styles.contentContainer}>
              <span
                className={`${styles.corner} ${styles.bottomLeftCorner}`}
              ></span>
              <div className={styles.content}>
                {block.content.map((obj) => {
                  const { id, para } = obj;
                  return <p key={id}>{para}</p>;
                })}
                <Button text={block.button.text} type={block.button.type} />
              </div>
              <span
                className={`${styles.corner} ${styles.bottomRightCorner}`}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Blocks.propTypes = {
  content: PropTypes.array,
};
