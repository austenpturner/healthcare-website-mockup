import { Link } from "react-router-dom";
import { mainNav } from "../../config/navigation";
import styles from "./mainNav.module.scss";
import { useContext } from "react";
import { UIContext } from "../../context/uiContext";

export default function MainNav() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleCloseNav() {
    uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
  }

  return (
    <nav
      className={styles.mainNav}
      data-visible={state.mobileNavOpen ? true : false}
    >
      <ul>
        {mainNav.map((item) => {
          return (
            <li key={item.id}>
              <Link onClick={handleCloseNav} to={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
