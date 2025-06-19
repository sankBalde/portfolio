export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "CS50’s Introduction to Artificial Intelligence with Python",
    image: "/certifications/cs50AI.png",
    link: "https://certificates.cs50.io/6e087326-7c16-4be5-a78f-f29525aa0314.pdf?size=letter",
    issuedBy: "Cambridge, Massachusetts",
    issuedDate: "March, 2025",
  },
  {
    name: "TensorFlow Developer Certificate in 2023: Zero to Mastery",
    image: "/certifications/cert_tensor.png",
    link: "https://www.udemy.com/certificate/UC-2f8819aa-8449-42b8-b05a-a23445db8261/",
    issuedBy: "Zero to Mastery",
    issuedDate: "5 avril 2023",
  },
];
