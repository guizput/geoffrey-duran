import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CtaSection({
  title,
  description,
  buttonText,
  buttonLink,
}: CtaProps) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href={buttonLink} className="flex items-center space-x-2">
                <span>{buttonText}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
