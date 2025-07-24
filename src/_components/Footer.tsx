import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Logo from "./ui/logo";

export default function Footer() {
  const services = [
    { name: "Cuisine sur mesure", href: "/prestations/cuisine-sur-mesure" },
    {
      name: "Marches & Escaliers",
      href: "/prestations/marches-et-escaliers",
    },
    { name: "Meubles sous pente", href: "/prestations/meubles-sous-pente" },
    { name: "Dressing sur mesure", href: "/prestations/dressing-sur-mesure" },
    {
      name: "Bibliothèque sur mesure",
      href: "/prestations/bibliotheque-sur-mesure",
    },
    { name: "Meubles sur mesure", href: "/prestations/meubles-sur-mesure" },
    {
      name: "Tables à manger & plateaux en bois massif",
      href: "/prestations/tables-bois-massif",
    },
    {
      name: "Parquet : pose, ponçage, vitrification",
      href: "/prestations/parquet-pose-renovation",
    },
    { name: "Volets sur mesure", href: "/prestations/volets-sur-mesure" },
    {
      name: "Pose de fenêtres, portes et volets roulants",
      href: "/prestations/pose-fenetres-portes",
    },
  ];

  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground mb-6 mt-4 max-w-md">
              Artisan menuisier passionné, je conçois et fabrique vos meubles et
              aménagements sur mesure en bois massif. Savoir-faire traditionnel
              et finitions soignées pour valoriser votre intérieur.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Nos Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">06 12 34 56 78</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div className="text-muted-foreground">
                  <div>Zone d&apos;intervention :</div>
                  <div>Ile de France</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
