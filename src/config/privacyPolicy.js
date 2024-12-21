import { contactInfo } from "./contact";

export const privacyPolicy = {
  heading: "Privacy Policy",
  subheading: "Effective Date:",
  date: "12/21/2024",
  sections: [
    {
      id: 1,
      heading: "Introduction",
      para: "We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information about you when you use our website or services.",
    },
    {
      id: 2,
      heading: "Information We Collect",
      listItems: [
        "Personal Information: Name, email address, and other details you provide.",
        "Usage Data: Information about how you interact with our site, including IP address, browser type, and time spent on pages.",
      ],
    },
    {
      id: 3,
      heading: "How We Use Your Information",
      para: "We use the collected data to:",
      listItems: [
        "Provide and improve our services.",
        "Respond to inquiries and offer customer support.",
        "Send updates and promotional material (with your consent).",
      ],
    },
    {
      id: 4,
      heading: "Sharing Your Information",
      para: "We do not sell your personal information. We may share your information with trusted third parties to help us operate our services, comply with legal obligations, or protect our rights.",
    },
    {
      id: 5,
      heading: "Your Choices",
      para: "You have the right to:",
      listItems: [
        "Access or update your personal information.",
        "Opt-out of marketing communications.",
        "Request the deletion of your data.",
      ],
    },
    {
      id: 6,
      heading: "Contact Us",
      para: `If you have questions about these Terms, please contact us at: Pacific Therapy, LLC, ${contactInfo.directions.address}. Phone: ${contactInfo.phone}. Email: ${contactInfo.email}`,
    },
  ],
};
