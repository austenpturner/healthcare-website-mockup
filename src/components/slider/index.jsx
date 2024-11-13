import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { testimonials } from "../../config/testimonials";
import Button from "../button";
import Slide from "../slide";
import styles from "./slider.module.scss";
import { useContext } from "react";
import { UIContext } from "../../context/uiContext";

export default function Slider() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleChangeSlide(direction) {
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
    <div className={styles.testimonialContainer}>
      <h2>Patient Testimonials</h2>
      <div className={styles.sliderContainer}>
        <Button
          icon={<FaArrowAltCircleLeft />}
          type="sliderArrow"
          handleAction={() => handleChangeSlide("left")}
        />
        <div className={styles.slider}>
          {testimonials.map((testimonial) => {
            return <Slide key={testimonial.id} testimonial={testimonial} />;
          })}
        </div>
        <Button
          icon={<FaArrowAltCircleRight />}
          type="sliderArrow"
          handleAction={() => handleChangeSlide("right")}
        />
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
    </div>
  );
}
