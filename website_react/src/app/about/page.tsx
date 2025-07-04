import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Abdoulaye Baldé | Senior Data Scientist & Cloud Architect",
  description:
    "Learn more about Abdoulaye Baldé, a Senior Data Scientist and Cloud Solutions Architect with 6 AWS certifications, specializing in AI/ML solutions and cloud architecture.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
