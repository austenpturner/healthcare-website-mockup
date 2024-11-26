import styles from "./corners.module.scss";

export default function TopCorners() {
  return (
    <div className={styles.cornerContainer}>
      <span className={`${styles.corner} ${styles.topLeftCorner}`}></span>
      <span className={`${styles.corner} ${styles.topRightCorner}`}></span>
    </div>
  );
}
