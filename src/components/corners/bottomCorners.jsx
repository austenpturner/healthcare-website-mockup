import styles from "./corners.module.scss";

export default function BottomCorners() {
  return (
    <div className={styles.cornerContainer}>
      <span className={`${styles.corner} ${styles.bottomLeftCorner}`}></span>
      <span className={`${styles.corner} ${styles.bottomRightCorner}`}></span>
    </div>
  );
}
