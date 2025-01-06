import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext();

function uiReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MOBILE_NAV":
      return {
        ...state,
        mobileNavOpen: action.payload,
      };
    case "TOGGLE_OVERLAY":
      return {
        ...state,
        overlayVisible: action.payload,
      };
    case "SET_CURRENT_PATIENT_TESTIMONIAL_SLIDE":
      return {
        ...state,
        currentPatientTestimonialSlide: action.payload,
      };
    case "SET_CURRENT_THERAPY_TYPE_SELECTED":
      return {
        ...state,
        currentTherapyTypeSelected: action.payload,
      };
    default:
      break;
  }
}

const initialState = {
  mobileNavOpen: false,
  overlayVisible: false,
  currentPatientTestimonialSlide: 1,
  currentTherapyTypeSelected: 1,
};

export default function UIProvider({ children }) {
  const [state, uiDispatch] = useReducer(uiReducer, initialState);

  console.log(state.mobileNavOpen);

  useEffect(() => {
    if (state.overlayVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [state.overlayVisible]);

  return (
    <UIContext.Provider value={{ state, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
}

UIProvider.propTypes = {
  children: PropTypes.object,
};
