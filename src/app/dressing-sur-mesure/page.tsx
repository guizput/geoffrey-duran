import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Dressing sur mesure",
    description:
      "Créez le dressing sur mesure de vos rêves avec un artisan menuisier expérimenté. Optimisation de l’espace, rangements personnalisés, matériaux de qualité et finitions soignées. Devis gratuit.",
  };
}

const heroData = {
  title: "Dressing sur mesure",
  subtitle: "Optimisez votre espace avec élégance",
  description:
    "Votre dressing sur mesure, conçu et installé par un artisan menuisier passionné. Profitez d'un rangement parfaitement adapté à votre intérieur, 100% personnalisé, pour valoriser chaque mètre carré de votre chambre ou de votre suite parentale. Découvrez un accompagnement sur-mesure, des matériaux nobles et un savoir-faire artisanal.",
  imageUrl: "/dressing-sur-mesure.jpg", // À personnaliser selon ta galerie
};

const gallery = {
  title: "Nos dressings sur mesure",
  description:
    "Inspirez-vous de nos réalisations de dressings personnalisés, fabriqués en atelier et posés chez nos clients. Fonctionnalité, esthétique et robustesse au rendez-vous.",
  items: [
    "https://placehold.co/800", // Remplace par tes propres photos !
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Votre dressing clé en main",
  description:
    "Un service complet, de la conception 3D à l'installation professionnelle",
  items: [
    "Design sur mesure, adapté à vos besoins et à votre espace",
    "Choix des matériaux : bois massif, mélaminé, laqué...",
    "Optimisation des rangements : penderies, tiroirs, étagères modulables",
    "Fabrication artisanale dans notre atelier",
    "Conseils personnalisés et accompagnement dédié",
    "Installation rapide et soignée chez vous",
    "Garantie qualité et respect des délais",
  ],
};

export default function DressingSurMesure() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
