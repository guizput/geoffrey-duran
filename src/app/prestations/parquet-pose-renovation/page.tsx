import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Parquet : pose, ponçage, vitrification",
    description:
      "Pose de parquet neuf, rénovation, ponçage et vitrification : confiez votre sol à un artisan qualifié pour un rendu durable et esthétique. Conseils, choix des essences et finitions sur mesure.",
  };
}

const heroData = {
  title: "Parquet : pose, ponçage, vitrification",
  subtitle: "Valorisez et protégez vos sols",
  description:
    "Bénéficiez d’un accompagnement complet pour votre parquet : pose soignée, rénovation, ponçage et vitrification professionnelle. Que ce soit pour un parquet neuf ou ancien, profitez d’un rendu impeccable, de conseils adaptés et d’une mise en valeur durable de vos sols.",
  imageUrl: "/parquet.jpg", // À personnaliser avec tes propres photos
};

const gallery = {
  title: "Nos réalisations en parquet",
  description:
    "Découvrez nos chantiers : pose de parquet, rénovation, ponçage et finitions sur mesure.",
  items: [
    "https://placehold.co/800", // Remplace par tes vraies images
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Nos prestations parquet",
  description: "Un service complet pour tous vos besoins en parquet",
  items: [
    "Conseil et choix de l’essence de bois",
    "Pose de parquet massif, contrecollé ou stratifié",
    "Rénovation de parquets anciens",
    "Ponçage dans les règles de l’art",
    "Vitrification, huilage ou cirage selon vos préférences",
    "Finitions sur mesure et entretien",
    "Travail soigné et respect des délais",
  ],
};

export default function ParquetPoseRenovation() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
