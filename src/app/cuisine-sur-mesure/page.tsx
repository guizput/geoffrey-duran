import { Hammer, Leaf, Award } from "lucide-react";
import HeroService from "@/_components/HeroService";
import Advantages from "@/_components/Advantages";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";

const heroData = {
  title: "Cuisine sur mesure",
  subtitle: "en bois massif",
  description:
    "Votre cuisine mérite d'être aussi unique que vous. Nous concevons et fabriquons des cuisines 100 % sur mesure, adaptées à vos habitudes, vos contraintes d'espace et vos goûts. Bois clair ou foncé, design moderne ou rustique, chaque cuisine est une pièce unique.",
  imageUrl: "/cuisine-bois.jpg",
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
    "Plans personnalisés",
    "Fabrication artisanale locale ",
    "Large choix d'essences de bois",
    "Finitions soignées",
    "Intégration des électroménagers",
    "Rangements optimisés",
    "Quincaillerie de qualité",
    "Pose et installation complète",
  ],
};

export const metadata = {
  title: "Cuisine sur mesure en bois massif | Menuiserie Artisanale",
  description:
    "Cuisine sur mesure en bois massif. Conception, fabrication et pose de cuisines artisanales. Chêne, hêtre, noyer. Devis gratuit.",
};

export default function CuisineSurMesure() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
