import teamPic from "../assets/images/team/team.jpg";
import lighthouse from "../assets/images/scenery/lighthouse.jpg";

export const aboutContent = {
  hero: {
    header: "About Us",
    backgroundImg: lighthouse,
  },
  intro: {
    header: "A Journey of Care and Connection",
    para: "At Pacific Therapy, we believe that every journey toward wellness begins with connection. Our story is one of compassion, dedication, and commitment to helping individuals navigate life’s challenges. From our humble beginnings to the supportive, client-centered practice we are today, we are honored to walk this path with you.",
  },
  mission: {
    header: "Our Mission",
    content: "To provide exceptional care that inspires growth and healing.",
  },
  values: {
    header: "Our Values",
    content: "Compassion, Inclusivity, & Professionalism",
  },
  approach: {
    header: "Our Approach To Therapy",
    content:
      "At Pacific Therapy, we believe in a holistic approach to mental health, combining evidence-based practices with a deep understanding of each individual's needs. We tailor our therapy to suit each client, whether through individual counseling, family therapy, or telehealth options.",
  },
};

export const blockContent = {
  sections: [
    {
      id: 1,
      heading: "Our Foundation",
      para: "Pacific Therapy was founded by two therapists who share the belief that no one should face life’s challenges alone. Since our beginnings we've strived to make therapy accessible for all.",
    },
    {
      id: 2,
      heading: "Our Space",
      para: "Located in Bellevue, WA, our office offers a serene retreat with private therapy rooms designed to help you feel at ease. Your comfort and privacy are our top priorities.",
    },
    {
      id: 3,
      heading: "Our Team",
      para: "Comprised of licensed therapists and support staff who bring a wealth of experience and a deep passion for helping others, our team creates a collaborative and client-centered environment.",
    },
    {
      id: 3,
      button: {
        text: "meet our team",
        type: "link",
        link: "/team",
      },
    },
  ],
  img: {
    src: teamPic,
    alt: "team",
  },
  location: "about",
};

export const aboutCards = [
  {
    id: 1,
    heading: "CBT",
    description:
      "Cognitive Behavioral Therapy (CBT) is a structured, evidence-based form of psychotherapy that focuses on identifying and changing unhelpful thought patterns and behaviors. It empowers clients to break the cycle of negative thinking and develop healthier perspectives and habits.",
    button: {
      text: "learn more",
      link: "/services#therapy-types",
    },
  },
  {
    id: 2,
    heading: "Mindfulness-Based Therapy",
    description:
      "Mindfulness is the practice of being fully present in the moment without judgment. In therapy, it combines meditative techniques with psychological insights to help you become more aware of your thoughts, feelings, and surroundings.",
    button: {
      text: "learn more",
      link: "/services#therapy-types",
    },
  },
  {
    id: 3,
    heading: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a specialized, evidence-based therapy designed to help people heal from trauma and distressing life events. It involves using guided eye movements to reprocess and resolve negative memories.",
    button: {
      text: "learn more",
      link: "/services#therapy-types",
    },
  },
  {
    id: 4,
    heading: "Psychotherapy",
    description:
      "Psychotherapy, often referred to as talk therapy, is a collaborative process between a client and a trained therapist designed to explore thoughts, emotions, and behaviors. It provides a safe, supportive environment to improve emotional well-being and foster personal growth.",
    button: {
      text: "learn more",
      link: "/services#therapy-types",
    },
  },
];
