import MenuBtn from "../menuBtn";
import MainNav from "../mainNav";
import styles from "./header.module.scss";
import useWindowResize from "../../hooks/useWindowResize";
import { useContext, useEffect } from "react";
import { UIContext } from "../../context/uiContext";
import Logo from "../logo";

export default function Header() {
  const { state, uiDispatch } = useContext(UIContext);
  const { width } = useWindowResize();

  useEffect(() => {
    if (width >= 1024 && state.mobileNavOpen) {
      uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
      uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
    }
  }, [width]);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <Logo size="medium" />
        <MenuBtn />
      </div>
      <MainNav />
    </header>
  );
}
