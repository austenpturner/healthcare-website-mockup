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

export const blockContent = [
  {
    id: 1,
    title: "Who are we?",
    content: [
      {
        id: 1,
        para: "At Pacific Therapy, we are a compassionate team dedicated to providing accessible, effective mental health care. Our mission is to create a safe space where healing and personal growth thrive.",
      },
      {
        id: 2,
        para: "From overcoming obstacles to achieving goals, we partner with you every step of the way, offering tailored care to meet your unique needs.",
      },
    ],
    button: {
      text: "about us",
      type: "link",
      link: "/about",
    },
    img: {
      src: womenSmiling,
      alt: "women smiling at each other",
    },
  },
  {
    id: 2,
    title: "How can we help?",
    content: [
      {
        id: 1,
        para: "We offer a wide range of services designed to meet your mental health needs. Whether you’re seeking individual therapy, couples counseling, or family support, we are here to help.",
      },
      {
        id: 2,
        para: "From managing stress to building stronger relationships, our diverse range of services is designed to empower you to lead a balanced and fulfilling life.",
      },
    ],
    button: {
      text: "our services",
      type: "link",
      link: "/services",
    },
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
