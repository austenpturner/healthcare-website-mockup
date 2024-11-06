import { Link } from "react-router-dom";
import { mainNav } from "../../config/navigation";
import styles from "./mainNav.module.scss";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

export default function MainNav() {
  const { state } = useContext(UIContext);

  return (
    <nav
      className={styles.mainNav}
      data-visible={!state.toggleMobileNav ? false : true}
    >
      <ul>
        {mainNav.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
