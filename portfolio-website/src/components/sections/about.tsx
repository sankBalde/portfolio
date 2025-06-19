"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Façonner l’avenir avec l’IA &{" "}
            <span className="text-primary">des architectures cloud innovantes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ingénieur IA Junior, spécialisé en vision par ordinateur, traitement du langage naturel et IA générative, 
            avec un intérêt marqué pour les innovations en IA/ML et les architectures cloud scalables.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Professional Summary */}
          <Card className="lg:col-span-2 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-primary/10`}>
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ingénieur IA Junior en dernière année à l’EPITA, je développe chez VINCI Construction des solutions alliant vision par ordinateur, NLP et IA générative pour automatiser les inspections ITV.
              Spécialisé en modélisation CNN, classification, et déploiement cloud, je conçois des systèmes IA optimisés et industrialisables.
            </p>
          </Card>

          {/* Skills Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`${category.color} hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-10">
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group pointer-events-auto"
          >
            En savoir plus sur moi
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
