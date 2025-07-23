import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Bibliothèque sur mesure",
    description:
      "Faites réaliser votre bibliothèque sur mesure par un artisan menuisier local : optimisation de l'espace, choix des matériaux, finitions haut de gamme. Conception, fabrication et pose professionnelles.",
  };
}

const heroData = {
  title: "Bibliothèque sur mesure",
  subtitle: "Pour sublimer et organiser votre intérieur",
  description:
    "Créez la bibliothèque sur mesure dont vous rêvez : rangements adaptés, design personnalisé, matériaux nobles. Votre artisan menuisier vous accompagne de la conception à l'installation, pour une solution esthétique et fonctionnelle, parfaitement intégrée à votre pièce.",
  imageUrl: "/bibliotheque.jpg", // À personnaliser avec ta propre image !
};

const gallery = {
  title: "Nos bibliothèques sur mesure",
  description:
    "Découvrez quelques-unes de nos réalisations de bibliothèques en bois massif ou sur mesure, parfaitement adaptées à chaque intérieur.",
  items: [
    "https://placehold.co/800", // Remplace par tes vraies photos !
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Notre accompagnement",
  description:
    "Un projet de bibliothèque sur mesure clé en main, pensé pour vous",
  items: [
    "Étude personnalisée et conception 3D",
    "Fabrication artisanale en bois massif, stratifié ou mélaminé",
    "Rangements adaptés à vos livres et objets déco",
    "Finitions haut de gamme et design unique",
    "Installation professionnelle chez vous",
    "Respect des délais et de votre budget",
    "Conseils personnalisés tout au long du projet",
  ],
};

export default function BibliothequeSurMesure() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
