import { useContext } from "react";
import styles from "./slide.module.scss";
import PropTypes from "prop-types";
import { UIContext } from "../../context/uiContext";

export default function Slide({ testimonial }) {
  const { state } = useContext(UIContext);

  return (
    <div
      className={styles.slide}
      data-visible={
        testimonial.id === state.currentPatientTestimonialSlide ? true : false
      }
    >
      <p>{testimonial.testimonial}</p>
      <p>{`- ${testimonial.initials}`}</p>
    </div>
  );
}

Slide.propTypes = {
  testimonial: PropTypes.object.isRequired,
};
