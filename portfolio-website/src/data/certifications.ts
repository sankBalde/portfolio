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
  }
];
