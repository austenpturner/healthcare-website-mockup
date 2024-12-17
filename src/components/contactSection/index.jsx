import styles from "./contactSection.module.scss";
import { contactLinks } from "../../config/contact";
import { contactSectionContent } from "../../config/homePage";
import { ContactForm } from "../contactForm";
import BottomCorners from "../corners/bottomCorners";
import TopCorners from "../corners/topCorners";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function ContactSection() {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 5% of the component is visible
  });

  return (
    <section className={styles.contactSection}>
      <div
        className={`${styles.contactContainer} ${
          isVisible ? "visible" : "hidden"
        }`}
        ref={elementRef}
      >
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
