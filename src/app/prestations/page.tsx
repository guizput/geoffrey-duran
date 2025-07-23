import ServiceCard from "@/_components/ServiceCard";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Nos Prestations",
    description:
      "Découvrez toutes nos prestations de menuiserie artisanale, du meuble sur mesure à l'aménagement complet.",
  };
}

const services = [
  {
    title: "Cuisine sur mesure",
    description:
      "Cuisines en bois massif, conçues et fabriquées selon vos besoins et votre espace.",
    href: "/cuisine-sur-mesure",
    image: "/cuisine-bois.jpg",
    features: [
      "Bois massif de qualité",
      "Conception sur mesure",
      "Pose professionnelle",
    ],
  },
  {
    title: "Marches & Escaliers",
    description:
      "Habillage de marches, création d'escaliers en bois, rénovation ou construction neuve.",
    href: "/marches-et-escaliers",
    image: "/escalier-bois.jpg",
    features: [
      "Escaliers sur mesure",
      "Habillage de marches",
      "Rénovation complète",
    ],
  },
  {
    title: "Meubles sous pente",
    description:
      "Optimisez vos espaces de rangement avec des meubles sur mesure adaptés aux sous-pentes et sous-escaliers.",
    href: "/meubles-sous-pente",
    image: "/meuble-sous-pente.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
  {
    title: "Dressing sur mesure",
    description:
      "Dressings en bois ou sur mesure, pensés et fabriqués pour optimiser vos rangements et valoriser votre intérieur.",
    href: "/dressing-sur-mesure",
    image: "/dressing-sur-mesure.jpg",
    features: [
      "Conception 100% personnalisée",
      "Matériaux de qualité au choix",
      "Installation professionnelle et soignée",
    ],
  },
  {
    title: "Bibliothèque sur mesure",
    description:
      "Bibliothèques design et robustes, créées à la demande pour s'adapter parfaitement à votre espace et à votre style.",
    href: "/bibliotheque-sur-mesure",
    image: "/bibliotheque.jpg",
    features: [
      "Conception personnalisée selon vos envies",
      "Matériaux de qualité : bois massif, stratifié...",
      "Installation artisanale et soignée",
    ],
  },
  {
    title: "Meubles sur mesure",
    description:
      "Création de meubles sur mesure pour chaque pièce : meuble TV, salle de bain, buffet, commode, mobilier d'entrée, etc.",
    href: "/meubles-sur-mesure",
    image: "/meuble-sur-mesure.jpg",
    features: [
      "Design personnalisé selon vos envies",
      "Choix des matériaux et finitions",
      "Installation professionnelle",
    ],
  },
  {
    title: "Tables à manger & plateaux en bois massif",
    description:
      "Tables à manger, plateaux et tables basses en bois massif : conception artisanale et finitions personnalisées.",
    href: "/tables-bois-massif",
    image: "/table-bois-massif.jpg",
    features: [
      "Bois massif de qualité (chêne, noyer, etc.)",
      "Dimensions et finitions sur mesure",
      "Fabrication artisanale",
    ],
  },
  {
    title: "Parquet : pose, ponçage, vitrification",
    description:
      "Pose de parquet, rénovation, ponçage et vitrification pour un sol comme neuf et durable.",
    href: "/parquet-pose-renovation",
    image: "/parquet.jpg",
    features: [
      "Pose tous types de parquets",
      "Rénovation et ponçage professionnel",
      "Finitions vitrifiées, huilées ou cirées",
    ],
  },
  {
    title: "Volets sur mesure",
    description:
      "Volets en bois conçus et fabriqués sur mesure : robustesse, esthétique et installation professionnelle.",
    href: "/volets-sur-mesure",
    image: "/volets-sur-mesure.jpg",
    features: [
      "Fabrication artisanale en bois",
      "Finitions personnalisées",
      "Pose et rénovation de volets",
    ],
  },
  {
    title: "Pose de fenêtres, portes et volets roulants",
    description:
      "Installation de fenêtres, portes et volets roulants sur mesure : sécurité, isolation et finitions soignées.",
    href: "/pose-fenetres-portes",
    image: "/pose-fenetres-portes.jpg",
    features: [
      "Conseils personnalisés",
      "Matériaux au choix : bois, alu, PVC",
      "Pose professionnelle",
    ],
  },
  {
    title: "Pose de fenêtres, portes et volets roulants",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/pose-fenetres-portes",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
];

const PrestationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Toutes nos prestations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Du meuble unique à l&apos;aménagement complet, chaque réalisation
              est conçue et fabriquée sur mesure dans notre atelier local.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrestationsPage;
