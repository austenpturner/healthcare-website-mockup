import PropTypes from "prop-types";
import TopCorners from "../corners/topCorners";
import BottomCorners from "../corners/bottomCorners";
import styles from "./contactContainer.module.scss";
import Directions from "../directions";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function ContactContainer({ content }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.05, // Trigger animation when 5% of the component is visible
  });

  function getContactType(type, contactInfo) {
    switch (type) {
      case "contactLinks":
        return (
          <div className={styles.contactLinks}>
            {contactInfo.map((link) => {
              return (
                <a href={link.href} key={link.id} className={styles.link}>
                  <link.icon />
                  <span>{link.value}</span>
                </a>
              );
            })}
          </div>
        );
      case "address":
        return (
          <div className={styles.mailingAddress}>
            {contactInfo.map((line, index) => {
              return (
                <p key={index} className={styles.addressLine}>
                  {line}
                </p>
              );
            })}
          </div>
        );
      case "directions":
        return <Directions content={contactInfo} />;
      default:
        break;
    }
  }

  return (
    <div
      className={`${styles[content.type]} ${styles.container} ${
        isVisible ? "visible" : "hidden"
      }`}
      ref={elementRef}
    >
      <TopCorners />
      <div className={styles.content}>
        {content.sections.map((section) => {
          return (
            <div className={`${styles.block}`} key={section.id}>
              <h3>{section.header}</h3>
              {getContactType(section.type, section.content)}
              <span className={styles.disclaimer}>{section.disclaimer}</span>
            </div>
          );
        })}
      </div>
      <BottomCorners />
    </div>
  );
}

ContactContainer.propTypes = {
  content: PropTypes.object,
};
