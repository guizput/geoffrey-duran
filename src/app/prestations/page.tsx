"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Hammer, Heart, Leaf } from "lucide-react";
import { Button } from "@/_components/ui/button";
import ServiceCard from "@/_components/ServiceCard";
import Footer from "@/_components/Footer";

const services = [
  {
    title: "Cuisine sur mesure",
    description:
      "Cuisines en bois massif, conçues et fabriquées selon vos besoins et votre espace.",
    href: "/cuisine-sur-mesure",
    image: "/cuisine-bois.jpg",
    features: [
      "Bois massif de qualité",
      "Conception sur mesure",
      "Pose professionnelle",
    ],
  },
  {
    title: "Marches & Escaliers",
    description:
      "Habillage de marches, création d'escaliers en bois, rénovation ou construction neuve.",
    href: "/marches-et-escaliers",
    image: "/escalier-bois.jpg",
    features: [
      "Escaliers sur mesure",
      "Habillage de marches",
      "Rénovation complète",
    ],
  },
  {
    title: "Dressing sur mesure",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/dressing-sur-mesure",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
  {
    title: "Bibliothèque sur mesure",
    description:
      "Bibliothèques en bois massif, conçues et fabriquées selon vos besoins et votre espace.",
    href: "/bibliotheques-sur-mesure",
    image: "/bibliotheque.jpg",
    features: [
      "Bois massif de qualité",
      "Conception sur mesure",
      "Pose professionnelle",
    ],
  },
  {
    title: "Meubles sur mesure (TV, salle de bain, etc.)",
    description:
      "Habillage de marches, création d'escaliers en bois, rénovation ou construction neuve.",
    href: "/meubles-sur-mesure",
    image: "/escalier-bois.jpg",
    features: [
      "Escaliers sur mesure",
      "Habillage de marches",
      "Rénovation complète",
    ],
  },
  {
    title: "Tables et plateaux bois massif",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/tables-bois-massif",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
  {
    title: "Parquet – pose, ponçage, vitrification",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/parquet-pose-renovation",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
  {
    title: "Volets bois sur mesure",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/volets-sur-mesure",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
  {
    title: "Pose de fenêtres, portes et volets roulants",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/pose-fenetres-portes",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
];

const PrestationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Toutes nos prestations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Du meuble unique à l&apos;aménagement complet, chaque réalisation
              est conçue et fabriquée sur mesure dans notre atelier local.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrestationsPage;
