import { testimonials } from "../../config/testimonials";
import Button from "../button";
import Slide from "../slide";
import styles from "./slider.module.scss";
import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Slider() {
  const { state, uiDispatch } = useContext(UIContext);
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  function handleChangeSlide(direction) {
    console.log(state.currentPatientTestimonialSlide);

    if (direction === "left") {
      if (state.currentPatientTestimonialSlide === 1) {
        uiDispatch({
          type: "SET_CURRENT_PATIENT_TESTIMONIAL_SLIDE",
          payload: testimonials.length,
        });
      } else {
        uiDispatch({
          type: "SET_CURRENT_PATIENT_TESTIMONIAL_SLIDE",
          payload: state.currentPatientTestimonialSlide - 1,
        });
      }
    } else if (direction === "right") {
      if (state.currentPatientTestimonialSlide === testimonials.length) {
        uiDispatch({
          type: "SET_CURRENT_PATIENT_TESTIMONIAL_SLIDE",
          payload: 1,
        });
      } else {
        uiDispatch({
          type: "SET_CURRENT_PATIENT_TESTIMONIAL_SLIDE",
          payload: state.currentPatientTestimonialSlide + 1,
        });
      }
    }
  }

  function handleSetSlide(id) {
    uiDispatch({
      type: "SET_CURRENT_PATIENT_TESTIMONIAL_SLIDE",
      payload: id,
    });
  }

  return (
    <section
      ref={elementRef}
      className={`${styles.testimonialContainer} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <h2>Patient Testimonials</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderButtons}>
          <Button
            icon={<PiCaretLeftBold />}
            type="sliderArrow"
            handleAction={() => handleChangeSlide("left")}
          />
          <Button
            icon={<PiCaretRightBold />}
            type="sliderArrow"
            handleAction={() => handleChangeSlide("right")}
          />
        </div>
        <div className={styles.slider}>
          {testimonials.map((testimonial) => {
            return <Slide key={testimonial.id} testimonial={testimonial} />;
          })}
        </div>
      </div>
      <div className={styles.slideSelectorContainer}>
        {testimonials.map((item) => {
          return (
            <Button
              key={item.id}
              type={
                item.id === state.currentPatientTestimonialSlide
                  ? `slideSelector active`
                  : `slideSelector`
              }
              handleAction={() => handleSetSlide(item.id)}
            />
          );
        })}
      </div>
    </section>
  );
}
