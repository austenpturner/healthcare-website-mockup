import styles from "./contentBlock.module.scss";
import PropTypes from "prop-types";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";
import Button from "../button";

export default function ContentBlock({ content, maxHeight, maxWidth }) {
  return (
    <div className={`${styles.block} ${styles[maxHeight]} ${styles[maxWidth]}`}>
      <TopCorners />
      <div className={styles.contentContainer}>
        {content.map((chunk) => {
          return (
            <div key={chunk.id}>
              {chunk.title && <h3>{chunk.title}</h3>}
              {chunk.heading && <h4>{chunk.heading}</h4>}
              <p className={chunk.id === 2 ? styles.spacingPara : ""}>
                {chunk.para}
              </p>
              {chunk.button && (
                <Button
                  text={chunk.button.text}
                  link={chunk.button.link}
                  type={chunk.button.type}
                />
              )}
            </div>
          );
        })}
      </div>
      <BottomCorners />
    </div>
  );
}

ContentBlock.propTypes = {
  content: PropTypes.array,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
};
