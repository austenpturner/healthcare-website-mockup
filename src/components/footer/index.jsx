import styles from "./footer.module.scss";
import Logo from "../logo";
import { mainNav } from "../../config/navigation";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo size="small" alignment="center" />
      <ul className={styles.footerNav}>
        {mainNav.map((navItem) => {
          return (
            <li key={navItem.id}>
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.legalContainer}>
        <div className={styles.legalLinkContainer}>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <p className={styles.copyright}>
          {String.fromCodePoint(169)} 2024 Pacific Therapy, LLC
        </p>
      </div>
    </footer>
  );
}
