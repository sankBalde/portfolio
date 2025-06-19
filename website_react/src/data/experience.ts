export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "AI Engineer - Computer Vision, Generative AI & NLP",
    company: "VINCI Construction",
    location: "Bordeaux, France",
    startDate: "Fevrier 2025",
    endDate: "Present",
    isRemote: false,
    achievements: [
      {
        text:
          "Développement d'une Solution IA pour l'Automatisation de l'Inspection des Canalisations."
      },
      {
        text:
          "Création d'une solution IA pour analyser les inspections ITV. "
      },
      {
        text: "Intégration des approches CNN et NLP pour traiter les données visuelles et générer des rapports.",
      },
      {
        text:
          "Développement d'une solution industrialisable répondant aux besoins des opérateurs."
      }
    ],
    skills: [
      { name: "Generative AI" },
      { name: "Deep Learning" },
      { name: "FastAPI" },
      { name: "Azure" },
      { name: "Machine Learning" },
      { name: "Computer vision" },
      { name: "GitHub Actions" },
      { name: "Python" },
    ],
  }
];

export const previousExperiences: Experience[] = [
  {
    title: "Animateur d’ateliers créatifs numériques (Programmation, Robotique, Electronique, Graphisme)",
    company: "Tech Kids Academy",
    location: "Paris, France",
    startDate: "Septembre 2024",
    endDate: "Février 2025",
    achievements: [],
    skills: [],
  },
  {
    title: "Enseignant auxiliaire",
    company: "Completude",
    location: "Paris, France",
    startDate: "Février 2023",
    endDate: "Septembre 2024",
    achievements: [],
    skills: [],
  },
   {
    title: "Data scientist - Computer vision",
    company: "Roadcare",
    location: "Paris, France",
    startDate: "Septembre 2023",
    endDate: "Janvier 2024",
    achievements: [],
    skills: [],
  }
];
