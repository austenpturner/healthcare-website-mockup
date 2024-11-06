import Button from "../button";
import MenuBtn from "../menuBtn";
import MainNav from "../mainNav";
import styles from "./header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <img src="src/assets/logo/logo.png" alt="" />
          <span>Pacific Therapy</span>
        </div>
        <MenuBtn />
      </div>
      <MainNav />
    </header>
  );
}
