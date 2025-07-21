import { Hammer, Leaf, Award } from "lucide-react";
import HeroService from "@/_components/HeroService";
import Advantages from "@/_components/Advantages";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";

const heroData = {
  title: "Marches & Escaliers",
  subtitle: "sur mesure",
  description:
    "Sublimez vos escaliers avec nos solutions sur mesure. Habillage de marches existantes, création d'escaliers neufs ou rénovation complète, nous adaptons notre savoir-faire à votre projet et votre budget.",
  imageUrl: "/escalier-bois.jpg",
};

const advantages = {
  title: "Pourquoi choisir une cuisine sur mesure ?",
  description:
    "Découvrez les bénéfices d'une cuisine artisanale en bois massif",
  items: [
    {
      icon: Award,
      title: "Conception sur mesure",
      description:
        "Chaque cuisine est unique et s'adapte parfaitement à votre espace et vos besoins.",
    },
    {
      icon: Leaf,
      title: "Bois massif de qualité",
      description:
        "Sélection rigoureuse des essences : chêne, hêtre, noyer selon vos préférences.",
    },
    {
      icon: Hammer,
      title: "Fabrication artisanale",
      description:
        "Réalisation complète dans notre atelier avec un savoir-faire traditionnel.",
    },
  ],
};

const features = {
  title: "Ce qui est inclus",
  description: "Une prestation complète de la conception à l'installation",
  items: [
    "Meubles hauts et bas sur mesure",
    "Îlot central personnalisé",
    "Plans de travail en bois massif",
    "Finitions au choix (vernis, huile, cire)",
    "Intégration des électroménagers",
    "Rangements optimisés",
    "Quincaillerie de qualité",
    "Pose et installation complète",
  ],
};

const process = {
  title: "Notre processus de création",
  description:
    "De l'idée à la réalisation, découvrez comment nous transformons vos envies en une cuisine fonctionnelle et esthétique.",
  steps: [
    {
      title: "Étude et conception",
      description:
        "Prise de mesures, étude de vos besoins et création des plans",
    },
    {
      title: "Fabrication",
      description: "Réalisation de tous les éléments dans notre atelier",
    },
    {
      title: "Installation",
      description: "Pose et finitions sur site avec un rendu parfait",
    },
  ],
};

const ctaData = {
  title: "Prêt à concrétiser votre projet de cuisine sur mesure ?",
  description: "Contactez-nous pour un devis gratuit et personnalisé",
  buttonText: "Demander un devis",
  buttonLink: "/contact",
};

export const metadata = {
  title: "Marches et escaliers sur mesure en bois | Menuiserie Artisanale",
  description:
    "Habillage de marches et création d'escaliers sur mesure en bois massif. Rénovation, construction neuve. Artisan menuisier qualifié.",
};

export default function CuisineSurMesure() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Advantages {...advantages} />

      <Features features={features} process={process} />

      <CtaSection {...ctaData} />
    </div>
  );
}
