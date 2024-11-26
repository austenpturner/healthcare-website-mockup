import styles from "./contactSection.module.scss";
import { contact } from "../../config/contact";
import { contactSectionContent } from "../../config/homePage";
import { ContactForm } from "../contactForm";

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.content}>
          <h3>{contactSectionContent.formHeader}</h3>
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
    </section>
  );
}
