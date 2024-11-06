import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext();

function uiReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MOBILE_NAV":
      return {
        ...state,
        toggleMobileNav: !state.toggleMobileNav,
      };
    case "TOGGLE_OVERLAY":
      return {
        ...state,
        overlayVisible: !state.overlayVisible,
      };
    default:
      break;
  }
}

const initialState = {
  toggleMobileNav: false,
  overlayVisible: false,
};

export default function UIProvider({ children }) {
  const [state, uiDispatch] = useReducer(uiReducer, initialState);

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
