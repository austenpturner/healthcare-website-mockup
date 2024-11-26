import { useNavigate } from "react-router-dom";
import Button from "../button";
import styles from "./contentBlock.module.scss";
import PropTypes from "prop-types";

export default function ContentBlock({ content }) {
  const navigate = useNavigate();

  return (
    <div className={styles.block}>
      <div className={styles.cornerContainer}>
        <span className={`${styles.corner} ${styles.topLeftCorner}`}></span>
        <span className={`${styles.corner} ${styles.topRightCorner}`}></span>
      </div>
      <div className={styles.contentContainer}>
        <h3>{content.title}</h3>
        {content.content.map((obj) => {
          const { id, para } = obj;
          return (
            <p key={id} className={id === 2 ? styles.spacingPara : ""}>
              {para}
            </p>
          );
        })}
        <Button
          text={content.button.text}
          type={content.button.type}
          handleAction={() => navigate(content.button.link)}
        />
      </div>
      <div className={styles.cornerContainer}>
        <span className={`${styles.corner} ${styles.bottomLeftCorner}`}></span>
        <span className={`${styles.corner} ${styles.bottomRightCorner}`}></span>
      </div>
    </div>
  );
}

ContentBlock.propTypes = {
  content: PropTypes.object,
};
