import { Brain, Cloud, Code, Terminal } from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Neural Networks",
      "Reinforcement Learning",
      "Deep Learning",
      "Generative AI",
      "LLM Fine-Tuning",
    ],
  },
  {
    name: "Cloud Architecture & MLOps",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "Microsoft Azure",
      "CloudFormation",
      "GPU Acceleration",
      "CI/CD",
      "Docker",
      "Git",
    ],
  },
  {
    name: "Programming",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "Java",
      "C/C++",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "Hugging Face Transformers",
      "Scikit-Learn",
      "CUDA",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "Data Science",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Feature Engineering",
      "Dimensionality Reduction",
      "Clustering",
      "Statistical Modeling",
      "Plotly Dash",
    ],
  },
];
