import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Meubles sous escalier et sous pente",
    description:
      "Optimisez chaque recoin de votre intérieur avec un meuble sur mesure parfaitement adapté à vos espaces complexes. Rangement, bibliothèque, dressing, bureau : tout est possible.",
  };
}

const heroData = {
  title: "Meubles sous escalier",
  subtitle: "et sous pente",
  description:
    "Optimisez chaque recoin de votre intérieur avec un meuble sur mesure parfaitement adapté à vos espaces complexes. Rangement, bibliothèque, dressing, bureau : tout est possible.",
  imageUrl: "/meuble-sous-pente.jpg",
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
    "Solutions 100 % personnalisées",
    "Fabrication artisanale en bois massif ",
  ],
};

export default function MeublesSousPente() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
