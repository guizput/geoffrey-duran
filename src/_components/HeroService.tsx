import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  btnText?: string;
  btnLink?: string;
}

export default function HeroService({
  title,
  subtitle,
  description,
  imageUrl,
  btnText = "Voir nos réalisations",
  btnLink = "/a-propos",
}: HeroProps) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
              <span className="block text-primary">{subtitle}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Demander un devis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={btnLink}>{btnText}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-xl w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
