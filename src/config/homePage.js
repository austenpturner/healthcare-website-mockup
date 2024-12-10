import womenSmiling from "../assets/images/people/women-smiling.jpg";
import manInSun from "../assets/images/people/man-in-sun.jpg";
import sunrise from "../assets/images/scenery/sunrise.jpg";
import { FaPhoneAlt } from "react-icons/fa";

export const homeContent = {
  hero: {
    header: "Pacific Therapy",
    backgroundImg: sunrise,
  },
  ctaButton: {
    text: "schedule",
    type: "schedule",
    icon: FaPhoneAlt,
    phoneNumber: "4257890001",
  },
  intro: {
    header: "Discover the Power of Healing and Growth",
    para: "At Pacific Therapy, we believe that every individual deserves compassionate and effective mental health care. Our team of experienced professionals specializes in a range of therapeutic approaches, each grounded in proven techniques and a deep understanding of human resilience.",
  },
};

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
        heading: "A Team",
        para: "At Pacific Therapy, we are a compassionate team dedicated to providing accessible, effective mental health care. Our mission is to create a safe space where healing and personal growth thrive.",
      },
      {
        id: 3,
        heading: "Your Partners",
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
        heading: "Therapy Options",
        para: "We offer a wide range of services designed to meet your mental health needs. Whether you’re seeking to foster resilience or process trauma, we have a therapy type to fit your goals.",
      },
      {
        id: 3,
        heading: "Scheduling Flexibility",
        para: "With multiple therapy frequencies and the options or either telehealth or in-person appointments, we will work with you to ensure accessibility and convenience, no matter your preferences or circumstances.",
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
