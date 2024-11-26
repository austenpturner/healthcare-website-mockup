import { useState } from "react";
import { contactFormControls } from "../../config/contactForm";
import CommonForm from "../form";
import styles from "./contactSection.module.scss";
import { contact } from "../../config/contact";
import { contactSectionContent } from "../../config/homePage";

const initialContactData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  contactType: "",
  message: "",
};

export default function ContactSection() {
  const [contactFormData, setContactFormData] = useState(initialContactData);

  function handleContactFormSubmit(event) {
    event.preventDefault();
    console.log(contactFormData);
  }

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
        <CommonForm
          formControls={contactFormControls}
          formData={contactFormData}
          setFormData={setContactFormData}
          buttonText="Submit"
          onHandleSubmit={handleContactFormSubmit}
        />
      </div>
    </section>
  );
}
