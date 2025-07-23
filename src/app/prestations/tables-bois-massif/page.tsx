import HeroService from "@/_components/HeroService";
import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Tables à manger & plateaux en bois massif",
    description:
      "Découvrez nos tables à manger et plateaux en bois massif : fabrication artisanale, finitions haut de gamme et personnalisation totale. Pour une pièce unique et chaleureuse.",
  };
}

const heroData = {
  title: "Tables à manger & plateaux en bois massif",
  subtitle: "Des créations uniques pour votre intérieur",
  description:
    "Optez pour une table à manger ou un plateau en bois massif, fabriqué sur mesure dans notre atelier. Choisissez l’essence de bois, la forme et les finitions pour une pièce élégante, résistante et parfaitement adaptée à votre espace de vie. Chaque table est unique, réalisée avec passion et savoir-faire artisanal.",
  imageUrl: "/table-bois-massif.jpg", // Adapte selon tes photos réelles
};

const gallery = {
  title: "Nos tables & plateaux en bois massif",
  description:
    "Inspirez-vous de nos réalisations sur mesure : tables à manger familiales, plateaux, tables basses et créations originales.",
  items: [
    "https://placehold.co/800", // Remplace par tes images
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
    "https://placehold.co/800",
  ],
};

const features = {
  title: "Ce que nous proposons",
  description:
    "Des tables sur mesure, robustes et élégantes, créées rien que pour vous",
  items: [
    "Choix de l’essence : chêne, noyer, frêne, hêtre…",
    "Dimensions et forme sur mesure",
    "Finitions au choix (huilée, vernie, brute…)",
    "Fabrication artisanale et locale",
    "Livraison et installation à domicile",
    "Entretien et conseils personnalisés",
  ],
};

export default function TablesBoisMassif() {
  return (
    <div className="min-h-screen bg-background">
      <HeroService {...heroData} />

      <Gallery {...gallery} />

      <Features features={features} />

      <CtaSection />
    </div>
  );
}
