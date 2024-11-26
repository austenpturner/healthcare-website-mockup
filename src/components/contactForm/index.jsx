import { useState } from "react";
import { contactFormControls } from "../../config/contactForm";
import CommonForm from "../form";
import styles from "./contactForm.module.scss";

const initialContactData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  contactType: "",
  message: "",
};

export function ContactForm() {
  const [contactFormData, setContactFormData] = useState(initialContactData);

  function handleContactFormSubmit(event) {
    event.preventDefault();
    console.log(contactFormData);
  }
  return (
    <div className={styles.contactFormContainer}>
      <CommonForm
        formControls={contactFormControls}
        formData={contactFormData}
        setFormData={setContactFormData}
        buttonText="Submit"
        onHandleSubmit={handleContactFormSubmit}
      />
    </div>
  );
}
