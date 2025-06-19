import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s |  ",
    default: " ",
  },
  description:
    " ",
  icons: {
    icon: '/headshot/headshot-2024.jpg',
    apple: '/headshot/headshot-2024.jpg',
  },
  openGraph: {
    type: 'website',
    title: ' ',
    description: ' ',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: ' '
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ' ',
    description: ' ',
    images: ['/screenshots/hero-preview.png']
  },
  keywords: [
    "Neuro-symbolic AI",
    "Deep Learning",
    "Reinforcement Learning",
    "Machine Learning",
    "AWS Machine Learning Engineer",
    "AWS Solutions Architect",
    "AWS SysOps Administrator",
    "AWS Developer",
    "AWS AI Practitioner",
    "Cloud Architecture",
    "MLOps",
    "Data Science",
    "Python",
    "Java",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "React",
    "Neural Networks",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "CloudFormation",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Vector Databases",
    "Statistical Modeling",
    "Clustering Algorithms",
    "PCA",
    "Feature Engineering",
    "Databricks",
    "AWS SageMaker",
    "Generative AI",
    "Large Language Models",
    "Serverless",
    "Innovation",
    "Node.js",
    "Full-Stack Development",
    "Cloud Computing",
  ],
  authors: [{ name: "Abdoulaye Baldé" }],
  creator: "Abdoulaye Baldé",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
