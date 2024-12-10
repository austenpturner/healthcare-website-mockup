import PropTypes from "prop-types";
import styles from "./teamMember.module.scss";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";

export default function TeamMember({ content, gridSize }) {
  return (
    <div className={styles.container}>
      <TopCorners />
      <img src={content.image.src} alt={content.image.alt} />
      <BottomCorners />
      <h4 className={gridSize === "gridSmall" ? styles.smallerHeader : ""}>
        <span>{content.name}</span>
        {content.credentials && <span>{`, ${content.credentials}`}</span>}
      </h4>
      <p className={gridSize === "gridSmall" ? styles.smallerPara : ""}>
        {content.title}
      </p>
    </div>
  );
}

TeamMember.propTypes = {
  content: PropTypes.object,
  gridSize: PropTypes.string,
};
