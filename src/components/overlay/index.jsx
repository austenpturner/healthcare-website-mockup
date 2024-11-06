import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import styles from "./overlay.module.scss";

export default function Overlay() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleCloseComponents() {
    // if (state.modal.isVisible) {
    //   uiDispatch({ type: "HIDE_MODAL" });
    // } else
    if (state.toggleMobileNav) {
      uiDispatch({ type: "TOGGLE_MOBILE_NAV" });
    }
    uiDispatch({ type: "TOGGLE_OVERLAY" });
  }

  return (
    <div
      className={styles.overlay}
      data-visible={state.overlayVisible ? true : false}
      aria-hidden="true"
      //   style={state.modal.isVisible ? { zIndex: 8000 } : null}
      onClick={handleCloseComponents}
    ></div>
  );
}
