import { FaPhoneAlt } from "react-icons/fa";
import Button from "../button";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Button
        text="schedule consult"
        type="schedule"
        icon={<FaPhoneAlt />}
        phoneNumber="3608600907"
      />
      <div className={styles.headerContainer}>
        <h1>{`You are not alone, we are here to help.`}</h1>
      </div>
    </div>
  );
}
