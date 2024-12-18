import PropTypes from "prop-types";
import TeamMember from "../teamMember";
import styles from "./teamGrid.module.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function TeamGrid({ content, gridSize }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      className={`${styles.container} ${isVisible ? "visible" : "hidden"}`}
      ref={elementRef}
    >
      <h3>{content.sectionTitle}</h3>
      <div className={styles[gridSize]}>
        {content.members.map((member) => {
          return (
            <TeamMember content={member} key={member.id} gridSize={gridSize} />
          );
        })}
      </div>
    </div>
  );
}

TeamGrid.propTypes = {
  content: PropTypes.object,
  gridSize: PropTypes.string,
};
