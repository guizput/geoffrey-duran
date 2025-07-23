import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Pose de fenêtres, portes et volets roulants",
    description:
      "Installation de fenêtres, portes d’entrée et volets roulants sur mesure : confort, sécurité et isolation pour votre habitat. Conseils personnalisés, matériaux de qualité, pose soignée.",
  };
}

const heroData = {
  title: "Pose de fenêtres, portes et volets roulants",
  subtitle: "Sécurité, performance et esthétique",
  description:
    "Faites installer vos fenêtres, portes et volets roulants par un artisan expérimenté. Bénéficiez de conseils personnalisés, d’une large gamme de matériaux et d’une pose soignée, pour plus de confort, de sécurité et d’économies d’énergie dans votre maison.",
  imageUrl: "/pose-fenetres-portes.jpg", // Personnalise avec ta photo si besoin
};

const gallery = {
  title: "Nos réalisations",
  description:
    "Découvrez nos chantiers de pose de fenêtres, portes et volets roulants, en neuf ou rénovation.",
  items: [
    "https://placehold.co/800", // Remplace par tes images réelles
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Nos prestations",
  description: "Un service clé en main, de la prise de mesures à la finition",
  items: [
    "Conseils pour le choix des matériaux (bois, alu, PVC…)",
    "Fenêtres, portes d’entrée et volets roulants sur mesure",
    "Pose professionnelle et finitions impeccables",
    "Isolation thermique et phonique renforcée",
    "Sécurité et confort au quotidien",
    "Dépose d’anciennes menuiseries",
    "Garantie qualité et suivi après installation",
  ],
};

export default function PoseFenetresPortes() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
