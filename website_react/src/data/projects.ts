import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "TIC-TAC-TOE",
    description:
      "Création et implémentation d'une IA en language Python dans le jeu Morpion contre qui le joueur peut challenger.",
    image: "/projects/Tictactoe.png",
    technologies: [
      "Python",
      "Min max algorithm"
    ],
    category: "SEARCH ALGORITHM",
    links: {
      github: "https://github.com/sankBalde/IA_Programming/tree/main/tic-tac-toe"
    },
    featured: false,
  },
  {
    id: "2",
    title: "Filtre détecteur de Mouvement sur GPU avec CUDA",
    description:
      "Le projet est dédié au développement d'un plugin GStreamer pour la séparation du fond et des objets"+
      "mobiles dans des vidéos. Le développement se déroulera en deux phases distinctes:"+
       " Utilisation du CPU avec C++ pour mettre en place une implémentation de référence. Cette version initiale servira de base pour évaluer les performances et la précision de la séparation du fond" +
        " Et deuxième phase: Optimisation utilisant CUDA",
    image: "/projects/filtre_mouvement.png",
    technologies: [
      "C++",
      "CUDA ",
      "Traitement de l'image",
      "Traitement numérique des images"
    ],
    category: "Traitement d'image",
    links: {
      github: "https://github.com/sankBalde/gstreamer_filter_project",
      live: "https://youtube.com/shorts/vVBreqDR3Ks"
    },
    featured: true,
  },
  {
    id: "3",
    title: "Un générateur automatique de CV et de lettres de motivation.",
    description:
      "Créer une interface intuitive avec Gradio pour générer automatiquement un CV et une lettre de motivation en format PDF, en se basant uniquement sur un texte source décrivant un profil professionnel et une offre d'emploi.",
    image: "/projects/cv_gen.png",
    technologies: [
      "Python",
      "Langchain",
      "Mistral",
      "LLM",
      "QA",
      "Prompting"
    ],
    category: "Prompting",
    links: {
      github: "https://github.com/sankBalde/CV-Generator/tree/main",
      
    },
    featured: true,
  },
  {
    id: "4",
    title: "Détection, Suivi et Scan de Documents dans des Vidéos de Smartphones SANS DEEP LEARNING",
    description:
      "Ce projet a pour objectif de détecter, extraire et suivre des documents présents dans des séquences vidéo capturées avec un smartphone. Il propose une solution complète de traitement d'image en temps réel.",
    image: "/projects/doc_detec.png",
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "Matplotlib",
      "Détection de contours et de formes géométriques",
      "Détection de ROI",
      "Transformation de perspective",
      "Tracking d'objet"
    ],
    category: "Traitement d'image",
    links: {
      github: "https://github.com/sankBalde/Detection-de-Document-avec-un-smartphone",
      live: "https://youtu.be/0xJtI-Va6Hg",
    },
    featured: true,
  },
  {
    id: "5",
    title: "Une montre avec un thème Tsukuyomi.",
    description:
      "Dans le cadre du cours OPENGL, nous avions pour mission de concevoir un shader personnalisé, avec pour seule contrainte notre imagination. J’ai choisi de créer une montre interactive inspirée du Tsukuyomi, une technique emblématique du personnage Itachi Uchiha dans l’univers de Naruto. L'idée de base était de représenter visuellement le temps, que je considère comme la ressource la plus précieuse, à travers une montre unique au style esthétique sombre et hypnotique, rappelant l’univers du Mangekyō Sharingan. Cette montre affiche l’heure en temps réel, tout en intégrant des effets visuels immersifs grâce aux shaders GLSL.",
    image: "/projects/montre-tsukiyomi.png",
    technologies: [
      "ShaderToy",
      "OPENGL",
    ],
    category: "Synthèse d'image",
    links: {
      github: "https://www.shadertoy.com/view/XfsczN",
      live: "https://youtu.be/cRaloAkykXk",
    },
    featured: false,
  },
  {
    id: "6",
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
    featured: false,
  },
  {
    id: "7",
    title: "NIM",
    description:
      "Création et implémentation d'une IA qui apprend d’elle même à jouer le jeu NIM; de plus en plus cette IA s'entraine, elle devient forte.",
    image: "/projects/nim.png",
    technologies: [
      "Python",
      "REINFORCEMENT LEARNING",
    ],
    category: "REINFORCEMENT LEARNING",
    links: {
      github: "https://github.com/sankBalde/IA_Programming/tree/main/nim",

    },
    featured: false,
  },
  {
    id: "8",
    title: "Digits",
    description:
      "Création et implémentation d'une IA qui reconnait des chiffres qui sont écris à la main.",
    image: "/projects/digit.png",
    technologies: [
      "Python",
      "TensorFlow",
      "Vision par ordinateur"
    ],
    category: "CNN",
    links: {
      github: "https://github.com/sankBalde/IA_Programming/tree/main/digits",
    },
    featured: false,
  }
];
