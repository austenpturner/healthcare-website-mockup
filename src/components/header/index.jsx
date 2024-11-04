import MainNav from "../mainNav";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Header</p>
      <MainNav />
    </header>
  );
}
