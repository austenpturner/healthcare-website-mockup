import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext();

function uiReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MOBILE_NAV":
      return {
        ...state,
        toggleMobileNav: !state.toggleMobileNav,
      };
    default:
      break;
  }
}

const initialState = {
  toggleMobileNav: false,
};

export default function UIProvider({ children }) {
  const [state, uiDispatch] = useReducer(uiReducer, initialState);

  return (
    <UIContext.Provider value={{ state, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
}

UIProvider.propTypes = {
  children: PropTypes.object,
};
