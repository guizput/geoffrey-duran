import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { Metadata } from "next";
import ContactForm from "@/_components/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title: "Contactez-nous",
    description:
      "Contactez-nous pour toute demande d'information ou de devis. Nous sommes là pour vous aider dans vos projets de menuiserie sur mesure.",
  };
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Prêt à donner vie à votre projet ? Contactez-nous pour un devis
            gratuit et personnalisé. Nous étudions ensemble la faisabilité de
            votre projet.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Informations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Téléphone",
                      lines: ["06 12 34 56 78", "Du lundi au vendredi, 8h-18h"],
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      lines: [
                        "contact@menuiserie-artisanale.fr",
                        "Réponse sous 24h",
                      ],
                    },
                    {
                      icon: MapPin,
                      title: "Zone d'intervention",
                      lines: [
                        "50km autour de [Votre ville]",
                        "Déplacements gratuits pour devis",
                      ],
                    },
                    {
                      icon: Clock,
                      title: "Horaires atelier",
                      lines: [
                        "Lun-Ven : 8h00 - 18h00",
                        "Sam : 9h00 - 12h00",
                        "Sur rendez-vous uniquement",
                      ],
                    },
                  ].map(({ icon: Icon, title, lines }) => (
                    <div key={title} className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {title}
                        </h3>
                        {lines.map((line, i) => (
                          <p
                            key={i}
                            className={`text-sm text-muted-foreground ${
                              i === 0 ? "" : "text-xs"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processus de devis */}
              <Card>
                <CardHeader>
                  <CardTitle>Processus de devis</CardTitle>
                  <CardDescription>Comment nous procédons</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Premier contact",
                      desc: "Discussion de votre projet et prise de rendez-vous",
                    },
                    {
                      step: "2",
                      title: "Visite technique",
                      desc: "Prise de mesures et étude de faisabilité",
                    },
                    {
                      step: "3",
                      title: "Devis détaillé",
                      desc: "Proposition technique et financière personnalisée",
                    },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {step}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{title}</h4>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
