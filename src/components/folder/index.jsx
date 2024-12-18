import { useContext } from "react";
import { FAQ } from "../FAQ";
import { UIContext } from "../../context/uiContext";
import PropTypes from "prop-types";
import styles from "./folder.module.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Folder({ content }) {
  const { state, uiDispatch } = useContext(UIContext);
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      className={`${styles.folderContainer} ${
        isVisible ? "visible" : "hidden"
      }`}
      ref={elementRef}
    >
      <ul className={styles.typeList}>
        {content.map((type) => {
          return (
            <li
              key={type.id}
              className={
                state.currentTherapyTypeSelected === type.id
                  ? `${styles.selectedType}`
                  : ""
              }
              onClick={() =>
                uiDispatch({
                  type: "SET_CURRENT_THERAPY_TYPE_SELECTED",
                  payload: type.id,
                })
              }
            >
              {type.abbr}
            </li>
          );
        })}
      </ul>
      {content.map((type) => {
        return (
          <div
            className={
              state.currentTherapyTypeSelected === type.id
                ? `${styles.therapyType} ${styles.showType}`
                : `${styles.therapyType}`
            }
            key={type.id}
          >
            <div>
              <h3>{type.type}</h3>
              <FAQ content={type} color="offWhite" />
            </div>
            <div className={styles.uses}>
              <h4>{type.uses.heading}</h4>
              <ul>
                {type.uses.useList.map((use, index) => {
                  return <li key={index}>{use}</li>;
                })}
              </ul>
            </div>
            <div className={styles.approachContainer}>
              <h4>{type.approach.heading}</h4>
              <p className={styles.approach}>{type.approach.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Folder.propTypes = {
  content: PropTypes.array,
};
