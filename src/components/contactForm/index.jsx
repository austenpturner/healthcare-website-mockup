import { useState } from "react";
import { contactFormControls } from "../../config/contactForm";
import CommonForm from "../form";
import Button from "../button";
import styles from "./contactForm.module.scss";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const initialContactData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  contactType: "",
  message: "",
};

export default function ContactForm() {
  const [contactFormData, setContactFormData] = useState(initialContactData);

  function handleContactFormSubmit(event) {
    event.preventDefault();
    console.log(contactFormData);
  }

  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.content}>
          <h2>{`Have questions? We'd love to hear from you! Please fill out and submit this form to get in touch:`}</h2>
          <div>
            <p>You can also reach us by calling or emailing our office: </p>
            <div className={styles.contactBtnContainer}>
              <Button icon={<FaPhoneAlt />} type="contact" />
              <span>(206)-789-9081</span>
            </div>
            <div className={styles.contactBtnContainer}>
              <Button icon={<FaEnvelope />} type="contact" />
              <span>info@pacifictherapy.com</span>
            </div>
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
