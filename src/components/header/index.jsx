import MenuBtn from "../menuBtn";
import MainNav from "../mainNav";
import styles from "./header.module.scss";
import useWindowResize from "../../hooks/useWindowResize";
import { useContext, useEffect } from "react";
import { UIContext } from "../../context/uiContext";

export default function Header() {
  const { state, uiDispatch } = useContext(UIContext);
  const { width } = useWindowResize();

  useEffect(() => {
    if (width > 768 && state.toggleMobileNav) {
      uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
      uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
    }
  }, [width]);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <img src="src/assets/logo/logo.png" alt="logo" />
          <span>Pacific Therapy</span>
        </div>
        <MenuBtn />
      </div>
      <MainNav />
    </header>
  );
}
