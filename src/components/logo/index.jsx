import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src="src/assets/logo/logo.png" alt="logo" />
      <span>Pacific Therapy</span>
    </div>
  );
}
