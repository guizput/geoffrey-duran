import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string; // accepte import d'image ou string
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
  features,
}: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        {/* next/image est préférable pour l'optimisation */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {features && (
          <ul className="space-y-1 text-sm text-muted-foreground mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          <Link
            href={href}
            className="flex items-center justify-center space-x-2"
          >
            <span>En savoir plus</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
