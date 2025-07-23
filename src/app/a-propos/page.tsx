import Features from "@/_components/Features";
import CtaSection from "@/_components/CtaSection";
import Gallery from "@/_components/Gallery";
import { Metadata } from "next";
import HeroAbout from "@/_components/HeroAbout";
import { Award, Clock, Hammer, Heart, Leaf, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";

export function generateMetadata(): Metadata {
  return {
    title: "Bibliothèque sur mesure",
    description:
      "Faites réaliser votre bibliothèque sur mesure par un artisan menuisier local : optimisation de l'espace, choix des matériaux, finitions haut de gamme. Conception, fabrication et pose professionnelles.",
  };
}

const heroData = {
  title: "L'artisan derrière",
  subtitle: "vos créations",
  description:
    "Menuisier passionné, je conçois des pièces uniques qui allient esthétique, fonctionnalité et respect de la matière. Chaque projet est une rencontre entre vos idées et mon savoir-faire, au service d’un intérieur qui vous ressemble.",
  imageUrl: "https://i.pravatar.cc/800?img=50", // À personnaliser avec ta propre image !
};

const values = [
  {
    icon: Award,
    title: "Savoir-faire artisanal",
    description:
      "Chaque pièce est fabriquée avec précision et respect des techniques traditionnelles, alliées à une recherche constante de qualité.",
  },
  {
    icon: Heart,
    title: "Passion du bois",
    description:
      "Je travaille le bois avec exigence et respect, en valorisant ses singularités et son authenticité naturelle.",
  },
  {
    icon: Leaf,
    title: "Respect de l'environnement",
    description:
      "Essences locales ou certifiées, finitions naturelles : mes choix sont guidés par une démarche responsable et durable.",
  },
];

const skills = [
  "Conception et plans techniques",
  "Sélection et approvisionnement bois",
  "Usinage traditionnel et moderne",
  "Assemblages traditionnels",
  "Finitions (vernis, huile, cire)",
  "Pose et installation",
  "Restauration de meubles anciens",
  "Conseil et accompagnement",
];

export default function APropos() {
  return (
    <div className="min-h-screen bg-background">
      <HeroAbout {...heroData} />

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mes valeurs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ce qui guide mon travail au quotidien
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {values.map((value, index) => (
                <Card key={value.title + index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="mt-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Mon parcours
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium mt-1">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Formation approfondie
                    </h3>
                    <p className="text-muted-foreground">
                      Formé aux techniques traditionnelles et contemporaines de
                      la menuiserie, je m’appuie sur un savoir-faire rigoureux
                      et maîtrisé.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium mt-1">
                    <Hammer className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Approche créative
                    </h3>
                    <p className="text-muted-foreground">
                      Chaque réalisation est pensée sur mesure : de la
                      conception aux finitions, j’accorde une attention
                      particulière aux détails, à la fonctionnalité et à
                      l’esthétique.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium mt-1">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Ancrage local
                    </h3>
                    <p className="text-muted-foreground">
                      Mon atelier est né d’une envie : créer du lien à travers
                      des projets sur mesure, durables et réalisés avec soin, au
                      plus proche de mes clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Mes compétences</CardTitle>
                <CardDescription>
                  Savoir-faire technique et artistique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ma philosophie
            </h2>
            <div className="mt-8 text-lg text-muted-foreground space-y-4">
              <p>
                « Chaque essence de bois a son caractère, ses qualités, son
                histoire. Mon rôle est de révéler cette beauté naturelle et de
                la mettre au service de votre quotidien. »
              </p>
              <p>
                « Je crois en la fabrication locale, au travail bien fait qui
                traverse les générations. Mes créations sont pensées pour durer
                et s'embellir avec le temps. »
              </p>
              <p>
                « Votre satisfaction est ma priorité. Je vous accompagne de la
                conception à la réalisation, en étant à l'écoute de vos besoins
                et contraintes. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Mes engagements
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Qualité artisanale
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Finitions soignées et attention aux détails
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Respect des délais
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Planning établi et tenu pour chaque projet
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Service personnalisé
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Accompagnement et conseil à chaque étape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
