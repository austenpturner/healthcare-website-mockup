import { FaPhoneAlt } from "react-icons/fa";
import Button from "../button";
import styles from "./hero.module.scss";
import PropTypes from "prop-types";

export default function Hero({ content, location }) {
  return (
    <div className={`${styles.hero} ${styles[location]}`}>
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
      {content.map((item) => {
        return (
          <div className={styles.optionsContainer} key={item.id}>
            <h2>{item.header}</h2>
            {item.listItems && (
              <ul>
                {item.listItems.map((listItem, index) => {
                  return <li key={index}>{listItem}</li>;
                })}
              </ul>
            )}
            {item.para && <p>{item.para}</p>}
            {item.button && (
              <Button
                text={item.button.text}
                type={item.button.type}
                icon={<item.button.icon />}
                phoneNumber={item.button.phoneNumber}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

Hero.propTypes = {
  content: PropTypes.array,
  location: PropTypes.string,
};
