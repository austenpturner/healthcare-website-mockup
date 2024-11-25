import styles from "./footer.module.scss";
import Logo from "../logo";
import { mainNav } from "../../config/navigation";
import { Link } from "react-router-dom";
// import Button from "../button";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContactContainer}>
        <Logo location="footerLogo" />
        {/* <div className={styles.contactLinks}>
          <div className={styles.contactBtnContainer}>
            <Button icon={<FaPhoneAlt />} type="contact" />
            <span>(206)-789-9081</span>
          </div>
          <div className={styles.contactBtnContainer}>
            <Button icon={<FaEnvelope />} type="contact" />
            <span>info@pacifictherapy.com</span>
          </div>
        </div> */}
      </div>

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
