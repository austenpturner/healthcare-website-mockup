import MainNav from "../mainNav";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logoContainer}>
          <img src="src/assets/images/logo.png" alt="" />
          <span>Pacific Therapy</span>
        </div>
      </div>
      <MainNav />
    </header>
  );
}
