import styles from "./contactSection.module.scss";
import { contact } from "../../config/contact";
import { contactSectionContent } from "../../config/homePage";
import { ContactForm } from "../contactForm";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.cornerContainer}>
          <span className={`${styles.corner} ${styles.topLeftCorner}`}></span>
          <span className={`${styles.corner} ${styles.topRightCorner}`}></span>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.headerContainer}>
            <h4>{contactSectionContent.formHeader}</h4>
            <div>
              <p>{contactSectionContent.contactHeader}</p>
              {contact.map((method) => {
                return (
                  <a
                    href={method.href}
                    key={method.id}
                    className={styles.contactLink}
                  >
                    <method.icon />
                    <span>{method.value}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>

        <div className={styles.cornerContainer}>
          <span
            className={`${styles.corner} ${styles.bottomLeftCorner}`}
          ></span>
          <span
            className={`${styles.corner} ${styles.bottomRightCorner}`}
          ></span>
        </div>
      </div>
    </section>
  );
}
