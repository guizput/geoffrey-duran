import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Meubles sur mesure",
    description:
      "Création et fabrication de meubles sur mesure : meuble TV, meuble de salle de bain, buffet, bibliothèque, mobilier d'entrée… Faites confiance à un artisan pour un intérieur unique et fonctionnel.",
  };
}

const heroData = {
  title: "Meubles sur mesure",
  subtitle: "Meuble TV, salle de bain, buffet…",
  description:
    "Vous rêvez d'un meuble parfaitement adapté à votre intérieur ? Que ce soit un meuble TV élégant, un meuble de salle de bain fonctionnel ou un mobilier d'entrée, profitez d'une conception sur mesure, réalisée avec soin et passion. Valorisez votre espace avec des pièces uniques, conçues et fabriquées dans notre atelier.",
  imageUrl: "/meuble-sur-mesure.jpg", // à personnaliser selon ta galerie
};

const gallery = {
  title: "Nos meubles sur mesure",
  description:
    "Inspirez-vous de nos réalisations : meubles TV, meubles de salle de bain, buffets, meubles d'entrée, commodes et bien plus.",
  items: [
    "https://placehold.co/800", // Remplace par tes photos
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Un accompagnement complet",
  description:
    "Du premier croquis à la pose, un service sur mesure à chaque étape",
  items: [
    "Étude de votre projet et conseils personnalisés",
    "Design sur mesure, adapté à vos besoins et à votre style",
    "Large choix de matériaux et de finitions",
    "Fabrication artisanale dans notre atelier",
    "Livraison et installation professionnelle",
    "Respect des délais et de votre budget",
    "Garantie de qualité sur toutes nos réalisations",
  ],
};

export default function MeublesSurMesure() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
