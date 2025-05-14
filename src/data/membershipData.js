// Application process steps
export const applicationSteps = [
  {
    id: 1,
    title: "Online Registration",
    steps: [
      {
        label: "Create Your Profile",
        description:
          "Sign up via our membership portal with your basic information.",
      },
      {
        label: "Select Your Membership Category",
        description: "Choose one of the four categories listed below.",
      },
    ],
  },
  {
    id: 2,
    title: "Document Submission",
    steps: [
      {
        label: "Identification",
        description: "Upload a valid photo ID or passport.",
      },
      {
        label: "Professional Credentials",
        description: "Provide relevant certificates, diplomas, or licenses.",
      },
      {
        label: "Resume/CV",
        description:
          "Submit a current resume highlighting your experience in dispute resolution or related fields.",
      },
      {
        label: "Additional Documents",
        description:
          "Depending on your chosen category, include additional supporting documents (e.g., recommendation letters, academic transcripts).",
      },
    ],
  },
  {
    id: 3,
    title: "Online Assessment & Interview",
    steps: [
      {
        label: "Digital Proficiency Test",
        description:
          "Complete an online test covering essential dispute resolution concepts.",
      },
      {
        label: "Scenario Simulation",
        description:
          "Participate in a virtual case study to demonstrate your problem-solving and negotiation skills.",
      },
      {
        label: "Virtual Interview",
        description:
          "(If required) Engage in a brief online interview with our membership panel.",
      },
    ],
  },
  {
    id: 4,
    title: "Review & Approval",
    steps: [
      {
        label: "Evaluation",
        description:
          "Our expert panel reviews your documents, test scores, and interview feedback.",
      },
      {
        label: "Notification",
        description: "Receive an email with your application status.",
      },
      {
        label: "Onboarding",
        description:
          "Once approved, gain full access to member benefits and our exclusive community platform.",
      },
    ],
  },
];

// Membership categories
export const membershipCategories = [
  {
    id: 1,
    title: "Student/Junior Member",
    designation: "Emerging Dispute Resolution Professional (EDRP)",
    description:
      "For students and young professionals aspiring to build a career in dispute resolution",
    benefits: [
      "Reduced membership fees",
      "Access to specialized career development programs",
      "Internship and mentorship opportunities",
    ],
  },
  {
    id: 2,
    title: "Associate Member",
    designation: "Associate Dispute Resolution Practitioner (ADRP)",
    description: "For emerging professionals and early-career enthusiasts.",
    benefits: [
      "Access to foundational webinars and workshops",
      "Mentorship opportunities",
      "Networking events and community support",
    ],
  },
  {
    id: 3,
    title: "Corporate Member",
    designation: "Corporate Conflict Resolution Advisor (CCRA)",
    description:
      "For organizations dedicated to integrating dispute resolution best practices.",
    benefits: [
      "Organizational representation in our community",
      "Customized training and consultancy sessions",
      "Exclusive access to collaborative projects and industry events",
    ],
  },
  {
    id: 4,
    title: "Full Member",
    designation: "Certified Dispute Resolution Specialist (CDRS)",
    description:
      "For established practitioners with significant experience in dispute resolution.",
    benefits: [
      "Advanced training sessions and industry insights",
      "Opportunities for publication and leadership roles",
    ],
  },
];

// Training options
export const trainingOptions = [
  {
    title: "Virtual Training",
    value: "Virtual Training",
    price: "Ksh 25,000",
    desc: "Complete your training online via ZOOM",
  },
  {
    title: "Physical Training",
    value: "Physical Training",
    price: "Ksh 40,000",
    desc: "Face-to-face in-person training",
  },
  {
    title: "Hybrid Training",
    value: "Hybrid Training",
    price: "Ksh 35,000",
    desc: "2 days virtual + 3 days physical training",
  },
];
