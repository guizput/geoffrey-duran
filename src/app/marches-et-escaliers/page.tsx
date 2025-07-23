import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Marches et escaliers sur mesure en bois",
    description:
      "Habillage de marches et création d'escaliers sur mesure en bois massif. Rénovation, construction neuve. Artisan menuisier qualifié.",
  };
}

const heroData = {
  title: "Marches et habillages d’escaliers",
  subtitle: "sur mesure",
  description:
    "Redonnez vie à votre escalier avec des marches élégantes et robustes, conçues à la demande. Je m’adapte à votre structure existante pour créer un ensemble harmonieux et durable.",
  imageUrl: "/escalier-bois.jpg",
};

const gallery = {
  title: "Nos réalisations",
  description: "Découvrez quelques-unes de nos oeuvres",
  items: [
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Ce qui est inclus",
  description: "Une prestation complète de la conception à l'installation",
  items: [
    "Pose en rénovation ou neuf",
    "Choix du bois, des finitions et des nez de marche ",
    "Possibilité d'habillage complet d'escalier",
  ],
};

export default function MarchesEtEscaliers() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
