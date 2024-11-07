import { FaPhoneAlt } from "react-icons/fa";
import Button from "../button";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImageBackground}>
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
      <div className={styles.optionsContainer}>
        <h2>Please ask us about our options:</h2>
        <ul>
          <li>Therapy types</li>
          <li>Appointment frequency</li>
          <li>Telehealth flexibility</li>
          <li>Insurance coverage</li>
          <li>Other resources</li>
        </ul>
        <Button
          text="schedule consult"
          type="schedule"
          icon={<FaPhoneAlt />}
          phoneNumber="3608600907"
        />
      </div>
    </div>
  );
}
