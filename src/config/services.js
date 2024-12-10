import inPerson from "../assets/images/people/in-person.jpg";
import telehealth from "../assets/images/people/telehealth.jpg";
import viewFromFerry from "../assets/images/scenery/view-from-ferry.jpg";

export const servicesContent = {
  hero: {
    header: "Our Services",
    backgroundImg: viewFromFerry,
  },
  intro: {
    header: "Therapy That Fits Your Life",
    para: "At Pacific Therapy, we understand that everyone's mental health journey is unique. That’s why we offer a variety of therapy services designed to address your individual needs and goals. From overcoming challenges to building resilience, our experienced team is here to guide you every step of the way.",
  },
};

export const servicesFrequency = {
  header: "Therapy Frequency",
  para: "The frequency of therapy sessions plays a vital role in your journey toward emotional and mental well-being. At Pacific Therapy, we offer flexible options tailored to your needs and lifestyle:",
  cards: [
    {
      id: 1,
      heading: "Weekly Sessions",
      description:
        "Ideal for those seeking consistent support and faster progress, weekly sessions allow for in-depth exploration of challenges and the development of actionable strategies. This option is especially beneficial for individuals facing acute concerns or seeking steady momentum in their therapy.",
    },
    {
      id: 2,
      heading: "Biweekly Sessions",
      description:
        "A balanced approach for individuals who require regular guidance but prefer more time between sessions to reflect and implement strategies. Biweekly sessions are effective for clients managing ongoing concerns or transitioning to less frequent therapy.",
    },
    {
      id: 3,
      heading: "Monthly Sessions",
      description:
        "A cost-effective and less time-intensive option, monthly sessions are suitable for clients who are maintaining progress or seeking occasional guidance. While it offers flexibility, it may not be ideal for addressing more pressing issues that benefit from frequent attention.",
    },
    {
      id: 4,
      heading: "Changing Frequency",
      description:
        "Your therapist will work with you to help you establish which frequency works best for you. At any point in your journey to wellbeing you may decide to increase or decrease therapy. We will help you find the best fit for your goals and current circumstances.",
    },
  ],
};

export const servicesPlatform = {
  header: "Therapy Platforms",
  intro:
    "Pacific Therapy offers both in-person and telehealth options to ensure accessibility and convenience, no matter your preferences or circumstances. Each mode of therapy has unique benefits and considerations. Our team is dedicated to providing the same high-quality, client-centered care through both in-person and telehealth therapy. We’re happy to help you find the option that suits your priorities and circumstances:",
  options: [
    {
      id: 1,
      sections: [
        {
          id: 1,
          title: "In-Person Therapy",
        },
        {
          id: 2,
          heading: "Pros:",
          para: "Face-to-face interaction fosters a sense of connection and presence, which some clients find more engaging. A dedicated space free from distractions can enhance focus and provide a comforting sense of routine.",
        },
        {
          id: 3,
          heading: "Cons:",
          para: "Requires travel time and may be less flexible for clients with busy schedules or mobility challenges.",
        },
        {
          id: 4,
          heading: "Why Choose In-Person: ",
          para: "Ideal for individuals who value physical presence, benefit from a structured environment, or prefer traditional therapy settings.",
        },
      ],
      img: {
        src: inPerson,
        alt: "in-person",
      },
    },
    {
      id: 2,
      sections: [
        {
          id: 1,
          title: "Telehealth Therapy",
        },
        {
          id: 2,
          heading: "Pros:",
          para: "Offers unmatched convenience and flexibility, allowing you to access therapy from the comfort of your home. Removes geographic barriers, making it easier to continue therapy even during travel or unexpected life events.",
        },
        {
          id: 3,
          heading: "Cons:",
          para: "May feel less personal for some clients, and a stable internet connection is essential for uninterrupted sessions.",
        },
        {
          id: 4,
          heading: "Why Choose In-Person:",
          para: "Perfect for clients with demanding schedules, those living in remote areas, or individuals who feel more at ease in their own environment.",
        },
      ],
      img: {
        src: telehealth,
        alt: "telehealth",
      },
    },
  ],
};

export const servicesTypes = {
  header: "Therapy Types",
  para: "At Pacific Therapy, we believe in a holistic approach to mental health, combining evidence-based practices with a deep understanding of each individual's needs. Our therapists are here to help you decide which therapy type aligns with your goals and challenges your facing.",
  types: [
    {
      id: 1,
      type: "Cognitive Behavioral Therapy",
      abbr: "CBT",
      questions: [
        {
          id: 1,
          question: "What is CBT?",
          answer:
            "Cognitive Behavioral Therapy (CBT) is a structured, evidence-based form of psychotherapy that focuses on identifying and changing unhelpful thought patterns and behaviors. It empowers clients to break the cycle of negative thinking and develop healthier perspectives and habits.",
        },
        {
          id: 2,
          question: "What does CBT do?",
          answer:
            "CBT helps you recognize and challenge distorted beliefs, providing tools to manage emotions, improve problem-solving skills, and reduce stress. Sessions often include practical exercises, like journaling or role-playing, to reinforce progress outside the therapy room.",
        },
      ],
      uses: {
        heading: "CBT is effective for managing:",
        useList: [
          "Anxiety and panic disorders",
          "Depression",
          "Post-traumatic stress disorder (PTSD)",
          "Phobias",
          "Obsessive-compulsive disorder (OCD)",
        ],
      },
      approach: {
        heading: "Pacific Therapy’s Approach:",
        info: "At Pacific Therapy, our CBT specialists work collaboratively with you to understand your unique challenges and develop personalized strategies to meet your goals. Our approach emphasizes practical, actionable steps to foster resilience and confidence in tackling life’s difficulties. Whether in-person or through telehealth, we ensure a supportive, compassionate environment tailored to your pace.",
      },
    },
    {
      id: 2,
      type: "Mindfulness-Based Therapy",
      abbr: "Mindfulness",
      questions: [
        {
          id: 1,
          question: "What is Mindfulness?",
          answer:
            "Mindfulness is the practice of being fully present in the moment without judgment. In therapy, it combines meditative techniques with psychological insights to help you become more aware of your thoughts, feelings, and surroundings.",
        },
        {
          id: 2,
          question: "What does Mindfulness do?",
          answer:
            "Mindfulness reduces stress, enhances emotional regulation, and increases self-awareness. It can also improve focus, reduce symptoms of depression and anxiety, and promote a sense of calm and well-being.",
        },
      ],
      uses: {
        heading: "Mindfulness is effective for managing:",
        useList: [
          "Stress management",
          "Generalized anxiety disorder",
          "Burnout and workplace stress",
          "Chronic pain",
          "Insomnia",
        ],
      },
      approach: {
        heading: "Pacific Therapy’s Approach:",
        info: "We integrate mindfulness techniques into therapy sessions to help you cultivate inner peace and resilience. Our therapists guide you through breathing exercises, body scans, and other grounding techniques that are easy to practice on your own. Whether you’re in a session or navigating daily life, mindfulness can help you feel more centered and in control.",
      },
    },
    {
      id: 3,
      type: "Eye Movement Desensitization and Reprocessing",
      abbr: "EMDR",
      questions: [
        {
          id: 1,
          question: "What is EMDR?",
          answer:
            "Eye Movement Desensitization and Reprocessing (EMDR) is a specialized, evidence-based therapy designed to help people heal from trauma and distressing life events. It involves using guided eye movements to reprocess and resolve negative memories.",
        },
        {
          id: 2,
          question: "What does EMDR do?",
          answer:
            "EMDR helps reduce the emotional intensity of traumatic memories, allowing you to gain new perspectives and reduce triggers. Over time, this process can alleviate symptoms of PTSD, anxiety, and other trauma-related disorders.",
        },
      ],
      uses: {
        heading: "EMDR is effective for managing:",
        useList: [
          "Post-traumatic stress disorder (PTSD)",
          "Childhood trauma",
          "Grief and loss",
          "Anxiety disorders",
          "Phobias and panic attacks",
        ],
      },
      approach: {
        heading: "Pacific Therapy’s Approach:",
        info: "At Pacific Therapy, our trained EMDR practitioners provide a safe and supportive space for processing trauma. We begin with a thorough understanding of your history, then guide you through the EMDR process at a pace that feels comfortable for you. Whether in-person or via telehealth, our goal is to help you move forward with clarity and strength.",
      },
    },
    {
      id: 4,
      type: "Psychotherapy",
      abbr: "Psychotherapy",
      questions: [
        {
          id: 1,
          question: "What is Psychotherapy?",
          answer:
            "Psychotherapy, often referred to as talk therapy, is a collaborative process between a client and a trained therapist designed to explore thoughts, emotions, and behaviors. It provides a safe, supportive environment to address mental health challenges, improve emotional well-being, and foster personal growth.",
        },
        {
          id: 2,
          question: "What does Psychotherapy do?",
          answer:
            "Psychotherapy helps clients gain deeper insights into their feelings and behaviors, identify patterns, and develop healthier coping mechanisms. It’s a versatile approach that adapts to the individual’s needs, fostering a stronger sense of self-awareness and emotional balance.",
        },
      ],
      uses: {
        heading: "Psychotherapy is effective for managing:",
        useList: [
          "Depression and mood disorders",
          "Anxiety and stress management",
          "Relationship issues",
          "Grief and loss",
          "Self-esteem and identity concerns",
        ],
      },
      approach: {
        heading: "Pacific Therapy’s Approach:",
        info: "At Pacific Therapy, we prioritize a client-centered approach to psychotherapy, ensuring every session is tailored to your unique needs and goals. Our therapists use evidence-based methods, such as cognitive, psychodynamic, and integrative techniques, to help you navigate life’s challenges. We also offer flexible telehealth options, making therapy accessible and convenient. Whether you're seeking clarity, healing, or growth, we’re here to guide you on your journey.",
      },
    },
  ],
};
