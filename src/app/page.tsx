"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Heart, Leaf } from "lucide-react";
import { Button } from "@/_components/ui/button";
import ServiceCard from "@/_components/ServiceCard";

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
    title: "Dressing sur mesure",
    description:
      "Optimisez vos espaces de rangement avec des dressings conçus parfaitement pour votre intérieur.",
    href: "/dressing-sur-mesure",
    image: "/dressing-bois.jpg",
    features: [
      "Optimisation d'espace",
      "Finitions soignées",
      "Aménagement personnalisé",
    ],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-workshop.jpg"
            alt="Atelier de menuiserie artisanale"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Menuiserie Artisanale
              <span className="block text-accent">Sur Mesure</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Installés en Ile-de-France, nous vous accompagnons dans tous vos
              projets d'agencement et de mobilier sur mesure. Spécialistes du
              bois massif, nous réalisons artisanalement cuisines, meubles,
              escaliers, dressings, bibliothèques et bien plus encore.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Demander un devis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/a-propos">Découvrir mon savoir-faire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nos Prestations Principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Du meuble unique à l&apos;aménagement complet, chaque pièce est
              pensée et fabriquée selon vos besoins, vos envies et l'esthétique
              de votre intérieur.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/prestations" className="flex items-center space-x-2">
                <span>Voir toutes nos prestations</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nos Valeurs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              L&apos;artisanat local au service de votre intérieur
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Savoir-faire Artisanal
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Techniques traditionnelles et gestes précis pour des
                  réalisations d&apos;exception.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Bois Noble & Durable
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Sélection rigoureuse des essences pour des créations qui
                  traversent le temps.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Fabrication Locale
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Tout est conçu et fabriqué dans notre atelier, sans
                  sous-traitance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contactez-nous pour un devis gratuit et personnalisé. Nous
              étudions ensemble la faisabilité de votre projet.
            </p>
            <div className="mt-8 flex justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Demander un devis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/a-propos">Découvrir l&apos;artisan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
