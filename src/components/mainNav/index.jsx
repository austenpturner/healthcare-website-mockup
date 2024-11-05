import { Link } from "react-router-dom";
import { mainNav } from "../../config/navigation";
import styles from "./mainNav.module.scss";

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
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
