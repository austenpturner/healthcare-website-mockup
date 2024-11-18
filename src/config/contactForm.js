export const contactFormControls = [
  {
    id: "contact-first-name",
    componentType: "input",
    label: "First name:",
    name: "firstName",
    placeholder: "Enter your first name...",
    type: "text",
  },
  {
    id: "contact-last-name",
    componentType: "input",
    label: "Last name:",
    name: "lastName",
    placeholder: "Enter your last name... ",
    type: "text",
  },
  {
    id: "contact-email",
    componentType: "input",
    label: "Email:",
    name: "email",
    placeholder: "Enter your email... ",
    type: "email",
  },
  {
    id: "contact-phone",
    componentType: "input",
    label: "Phone number:",
    name: "phone",
    placeholder: "000000000",
    type: "phone",
  },
  {
    id: "content-select",
    componentType: "select",
    label: "How may we contact you?",
    name: "contact-type",
    options: [
      {
        name: "Phone",
        value: "phone",
      },
      {
        name: "Email",
        value: "email",
      },
      {
        name: "Either of the above",
        value: "both",
      },
    ],
  },
  {
    id: "contact-message",
    componentType: "textarea",
    label: "Message:",
    name: "message",
    placeholder: "Enter your message... ",
  },
];
