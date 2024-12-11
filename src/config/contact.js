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
  address: "1111 110th Ave NE, Bellevue, WA 98004",
  mailingAddress: {
    line1: "Pacific Therapy, LLC",
    line2: "1111 110th Ave NE, Bellevue, WA 98004",
  },
};
