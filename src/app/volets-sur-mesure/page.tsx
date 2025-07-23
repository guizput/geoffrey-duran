import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Volets sur mesure",
    description:
      "Volets en bois sur mesure : fabrication artisanale, finitions de qualité, installation professionnelle. Valorisez votre façade et améliorez l’isolation de votre maison avec des volets uniques.",
  };
}

const heroData = {
  title: "Volets sur mesure",
  subtitle: "Protection, esthétique et robustesse",
  description:
    "Optez pour des volets sur mesure adaptés à votre maison : fabrication artisanale en bois, finitions personnalisées et pose soignée. Améliorez l’isolation, la sécurité et l’apparence de votre façade avec des volets conçus spécialement pour vous.",
  imageUrl: "/volets-sur-mesure.jpg", // À remplacer par ta photo réelle si besoin
};

const gallery = {
  title: "Nos volets sur mesure",
  description:
    "Quelques exemples de volets en bois réalisés et posés chez nos clients : battants, pliants, persiennes…",
  items: [
    "https://placehold.co/800", // Remplace par tes propres images
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Ce que nous proposons",
  description: "Une prestation complète pour vos volets sur mesure",
  items: [
    "Prise de mesures et étude personnalisée",
    "Conception et fabrication artisanale en bois massif",
    "Large choix de styles, de couleurs et de finitions",
    "Pose professionnelle et rapide",
    "Rénovation et réparation de volets existants",
    "Isolation renforcée et sécurité améliorée",
    "Garantie qualité et conseils d’entretien",
  ],
};

export default function VoletsSurMesure() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
