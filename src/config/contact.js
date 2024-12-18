import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import mountain from "../assets/images/scenery/mountain.jpg";

export const contactContent = {
  hero: {
    header: "Contact Us",
    backgroundImg: mountain,
  },
  intro: {
    header: "We'd Like To Hear From You",
    para: "At Pacific Therapy, your journey to wellness begins with a conversation. Whether you have questions, need guidance, or are ready to take the first step, we’re here to support you with care and understanding. Let’s work together to create a path that feels right for you.",
  },
};

export const contactLinks = [
  {
    id: 1,
    type: "phone",
    value: "425-789-0001",
    href: "tel:4257890001",
    icon: FaPhoneAlt,
  },
  {
    id: 2,
    type: "email",
    value: "info@pacifictherapy.com",
    href: "mailto:info@pacifictherapy.com",
    icon: FaEnvelope,
  },
];

export const contactInfo = {
  phone: "425-789-0001",
  email: "info@pacifictherapy.com",
  mailingAddress: [
    "Pacific Therapy, LLC",
    "1111 110th Ave NE, Bellevue, WA 98004",
  ],
  directions: {
    address: "1111 110th Ave NE, Bellevue, WA 98004",
    googleMapsLink:
      "https://www.google.com/maps/dir//Bellevue+Library+1111+110th+Ave+NE+Bellevue,+WA+98004/@47.6200443,-122.1941689,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54906c8c6badfd01:0xba3faf4f02e64232!2m2!1d-122.1941689!2d47.6200443?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D",
    embeddedMapsSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43029.01142467718!2d-122.27038621902466!3d47.62004253316506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c8c6badfd01%3A0xba3faf4f02e64232!2sBellevue%20Library!5e0!3m2!1sen!2sus!4v1733863161543!5m2!1sen!2sus",
  },
};

export const contact = [
  {
    id: 1,
    type: "contactInfo",
    sections: [
      {
        id: 1,
        type: "contactLinks",
        header: "Reach us by phone or email:",
        disclaimer: "*This contact info is for demonstration purposes only.",
        content: contactLinks,
      },
      {
        id: 2,
        type: "address",
        header: "Please send mail to:",
        disclaimer: "*This contact info is for demonstration purposes only.",
        content: contactInfo.mailingAddress,
      },
    ],
  },
  {
    id: 2,
    type: "locationInfo",
    sections: [
      {
        id: 1,
        type: "directions",
        header: "Locate our office:",
        disclaimer: "*This location is for demonstration purposes only.",
        content: contactInfo.directions,
      },
    ],
  },
];
