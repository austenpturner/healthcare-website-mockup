import { useContext } from "react";
import styles from "./menuBtn.module.scss";
import { UIContext } from "../../context/uiContext";

export default function MenuBtn() {
  const { state, uiDispatch } = useContext(UIContext);
  function handleToggleMobileNav() {
    uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: !state.mobileNavOpen });
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: !state.overlayVisible });
  }

  return (
    <button
      aria-label={
        state.mobileNavOpen ? "close category menu" : "open category menu"
      }
      aria-expanded={state.mobileNavOpen ? "true" : "false"}
      aria-controls="navigation menu"
      className={styles.menuBtnContainer}
      onClick={handleToggleMobileNav}
      // tabIndex={state.modal.isVisible ? "-1" : "0"}
    >
      <svg
        className={styles.menuBtn}
        viewBox="0 0 120 100"
        width="35"
        aria-hidden="true"
      >
        <rect
          className={`${styles.line} ${styles.line__top}`}
          width="70"
          height="8"
          x="10"
          y="25"
          rx="4"
        ></rect>
        <rect
          className={`${styles.line} ${styles.line__middle}`}
          width="70"
          height="8"
          x="10"
          y="45"
          rx="4"
        ></rect>
        <rect
          className={`${styles.line} ${styles.line__bottom}`}
          width="70"
          height="8"
          x="10"
          y="65"
          rx="4"
        ></rect>
      </svg>
    </button>
  );
}
