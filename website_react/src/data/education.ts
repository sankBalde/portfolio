export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Ingénieur IA | Vision par ordinateur, NLP, IA générative",
  school: "Epita",
  location: "Kremlin Bicetre, Paris, France",
  startDate: "Septembre, 2022",
  endDate: "Juillet, 2025",
  gpa: "3.8",
  honors: [
   
  ],
  activities: [
    
  ],
};
