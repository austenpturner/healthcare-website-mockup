import { FaPhoneAlt } from "react-icons/fa";
import womenSmiling from "../assets/images/people/women-smiling.jpg";
import manInSun from "../assets/images/people/man-in-sun.jpg";

export const heroContent = [
  {
    id: 1,
    header: "Please ask us about our options:",
    listItems: [
      "Therapy types",
      "Appointment frequency",
      "Telehealth flexibility",
      "Insurance coverage",
      "Other resources",
    ],
    button: {
      text: "schedule consult",
      type: "schedule",
      icon: FaPhoneAlt,
      phoneNumber: "3608600907",
    },
  },
];

export const homeBlocks = [
  {
    id: 1,
    sections: [
      {
        id: 1,
        title: "Who are we?",
      },
      {
        id: 2,
        para: "At Pacific Therapy, we are a compassionate team dedicated to providing accessible, effective mental health care. Our mission is to create a safe space where healing and personal growth thrive.",
      },
      {
        id: 3,
        para: "From overcoming obstacles to achieving goals, we partner with you every step of the way, offering tailored care to meet your unique needs.",
      },
      {
        id: 4,
        button: {
          text: "about us",
          type: "link",
          link: "/about",
        },
      },
    ],
    img: {
      src: womenSmiling,
      alt: "women smiling at each other",
    },
  },
  {
    id: 2,
    sections: [
      {
        id: 1,
        title: "How can we help?",
      },
      {
        id: 2,
        para: "We offer a wide range of services designed to meet your mental health needs. Whether you’re seeking individual therapy, couples counseling, or family support, we are here to help.",
      },
      {
        id: 3,
        para: "From managing stress to building stronger relationships, our diverse range of services is designed to empower you to lead a balanced and fulfilling life.",
      },
      {
        id: 4,
        button: {
          text: "our services",
          type: "link",
          link: "/services",
        },
      },
    ],
    img: {
      src: manInSun,
      alt: "man in sun",
    },
  },
];

export const contactSectionContent = {
  formHeader:
    "Have more questions? We'd love to hear from you! Please fill out and submit this form to get in touch:",
  contactHeader: "You can also reach us by calling or emailing our office:",
};
