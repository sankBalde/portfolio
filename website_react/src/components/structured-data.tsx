export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdoulaye Baldé",
    url: "https://abdoulaye.com",
    jobTitle: "Ingénieur IA Junior | Vision par ordinateur, NLP, IA générative",
    description:
      "Ingénieur IA Junior, spécialisé en vision par ordinateur, traitement du langage naturel et IA générative, avec un intérêt marqué pour les innovations en IA/ML et les architectures cloud scalables.",
    sameAs: [
 
    ],
    knowsAbout: [

      "Deep Learning",
      "Reinforcement Learning",
      "Machine Learning Engineering",
      "Azure Cloud Architecture",
      "Serverless Computing",
      "MLOps",
      "Data Science",
      "Python Development",
      "TensorFlow & PyTorch",
      "LangChain & Vector Databases",
      "CI/CD & Infrastructure as Code",
      "Docker",
      "Node.js Development",
      "Statistical Modeling",
      "Clustering & Dimensionality Reduction",
      "Innovation & Cloud Computing",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdoulaye Baldé - Portfolio",
    url: "https://abdoulaye.com",
    description:
      "Ingénieur IA Junior, spécialisé en vision par ordinateur, traitement du langage naturel et IA générative, avec un intérêt marqué pour les innovations en IA/ML et les architectures cloud scalables.",
    author: {
      "@type": "Person",
      name: "Abdoulaye Baldé",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
