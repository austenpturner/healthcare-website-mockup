import { useNavigate } from "react-router-dom";
import Button from "../button";
import styles from "./contentBlock.module.scss";
import PropTypes from "prop-types";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";

export default function ContentBlock({ content }) {
  const navigate = useNavigate();

  return (
    <div className={styles.block}>
      <TopCorners />
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
      <BottomCorners />
    </div>
  );
}

ContentBlock.propTypes = {
  content: PropTypes.object,
};
