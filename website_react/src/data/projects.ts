import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Simulation et animation 3D des pendules de Newton !",
    description:
      "Une simulation interactive des pendules de Newton. Ce projet illustre des concepts de physique appliquée et de rendu graphique en temps réel.",
    image: "/projects/pendule_newton.png",
    technologies: [
      "C++",
      "OPENGL",
    ],
    category: "Simulation 3D",
    links: {
      github: "https://github.com/sankBalde/Pendule-de-Newton/tree/main",
      live: "https://youtu.be/DGv85jdLuaU",
    },
    featured: true,
  }
];
