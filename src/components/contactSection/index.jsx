import styles from "./contactSection.module.scss";
import { contactLinks } from "../../config/contact";
import { contactSectionContent } from "../../config/homePage";
import { ContactForm } from "../contactForm";
import BottomCorners from "../corners/bottomCorners";
import TopCorners from "../corners/topCorners";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <TopCorners />
        <div className={styles.contentContainer}>
          <div className={styles.headerContainer}>
            <h4>{contactSectionContent.formHeader}</h4>
            <div>
              <p>{contactSectionContent.contactHeader}</p>
              {contactLinks.map((method) => {
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
        <BottomCorners />
      </div>
    </section>
  );
}
