import { contactInfo } from "./contact";

export const terms = {
  heading: "Terms & Conditions",
  subheading: "Effective Date:",
  date: "12/21/2024",
  sections: [
    {
      id: 1,
      heading: "Acceptance of Terms",
      para: "By accessing or using our website, you agree to these Terms of Service. If you do not agree, please do not use our site.",
    },
    {
      id: 2,
      heading: "Use of the Service",
      listItems: [
        "You must be at least 18 years old to use our services.",
        "You agree to use the site only for lawful purposes.",
      ],
    },
    {
      id: 3,
      heading: "Intellectual Property",
      para: "All content on this site, including text, graphics, and logos, is owned by us or our licensors. You may not reproduce, distribute, or create derivative works without prior written consent.",
    },
    {
      id: 4,
      heading: "User Responsibilities",
      listItems: [
        "Do not engage in unauthorized access or misuse of the site.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
      ],
    },
    {
      id: 5,
      heading: "Limitation of Liability",
      para: "We are not liable for any damages arising from your use of the site, including direct, indirect, or incidental losses.",
    },
    {
      id: 6,
      heading: "Changes to Terms",
      para: "We may update these Terms from time to time. Continued use of the site indicates your acceptance of any revised Terms.",
    },
    {
      id: 7,
      heading: "Contact Us",
      para: `If you have questions about these Terms, please contact us at: Pacific Therapy, LLC, ${contactInfo.directions.address}. Phone: ${contactInfo.phone}. Email: ${contactInfo.email}`,
    },
  ],
};
