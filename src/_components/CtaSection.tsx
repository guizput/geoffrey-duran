import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ctaData = {
  title: "Prêt à concrétiser votre projet ?",
  description: "Contactez-nous pour un devis gratuit et personnalisé",
  buttonText: "Demander un devis",
  buttonLink: "/contact",
};

export default function CtaSection() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            {ctaData.title}
          </h2>
          <p className="mt-4 text-lg text-white">{ctaData.description}</p>
          <div className="mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link
                href={ctaData.buttonLink}
                className="flex items-center space-x-2"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
