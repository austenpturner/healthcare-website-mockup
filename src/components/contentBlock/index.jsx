import { useNavigate } from "react-router-dom";
import Button from "../button";
import styles from "./contentBlock.module.scss";
import PropTypes from "prop-types";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";

export default function ContentBlock({ content, location }) {
  const navigate = useNavigate();

  return (
    <div className={`${styles.block} ${styles[location]}`}>
      <TopCorners />
      <div className={styles.contentContainer}>
        {content.title && <h3>{content.title}</h3>}
        {content.content.map((obj) => {
          const { id, para } = obj;
          return (
            <p key={id} className={id === 2 ? styles.spacingPara : ""}>
              {para}
            </p>
          );
        })}
        {content.button && (
          <Button
            text={content.button.text}
            type={content.button.type}
            handleAction={() => navigate(content.button.link)}
          />
        )}
      </div>
      <BottomCorners />
    </div>
  );
}

ContentBlock.propTypes = {
  content: PropTypes.object,
  location: PropTypes.string,
};
