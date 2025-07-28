"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ChevronUp } from "lucide-react";
import Logo from "./ui/logo";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Prestations",
    href: "/prestations",
    submenu: [
      {
        title: "Cuisine sur mesure",
        href: "/prestations/cuisine-sur-mesure",
      },
      {
        title: "Marches & Escaliers",
        href: "/prestations/marches-et-escaliers",
      },
      {
        title: "Meubles sous pente",
        href: "/prestations/meubles-sous-pente",
      },
      {
        title: "Dressing sur mesure",
        href: "/prestations/dressing-sur-mesure",
      },
      {
        title: "Bibliothèque sur mesure",
        href: "/prestations/bibliotheque-sur-mesure",
      },
      {
        title: "Meubles sur mesure",
        href: "/prestations/meubles-sur-mesure",
      },
      {
        title: "Tables à manger & plateaux en bois massif",
        href: "/prestations/tables-bois-massif",
      },
      {
        title: "Parquet : pose, ponçage, vitrification",
        href: "/prestations/parquet-pose-renovation",
      },
      {
        title: "Volets sur mesure",
        href: "/prestations/volets-sur-mesure",
      },
      {
        title: "Pose de fenêtres, portes et volets roulants",
        href: "/prestations/pose-fenetres-portes",
      },
    ],
  },
  { name: "À propos", href: "/a-propos" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <Logo />

          {/* Desktop Navigation */}
          <div
            className="ml-10 hidden lg:flex lg:space-x-8 relative"
            ref={navRef}
          >
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {/* Lien principal cliquable */}
                {item.submenu ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    className={`inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors appearance-none bg-transparent border-none focus:outline-none ${
                      isActive(item.href)
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    type="button"
                  >
                    <span>{item.name}</span>
                    {activeDropdown === item.name ? (
                      <ChevronUp className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Sous-menu visible uniquement si actif */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border absolute bg-background w-full left-0 shadow-md z-50">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? "text-primary bg-secondary"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Submenu for "Prestations" */}
                  {item.submenu && (
                    <div
                      className={`pt-2 border-t border-primary w-full bg-background`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary`}
                          onClick={() => setMobileMenuOpen(false)} // 👈 ajout ici
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
      <Link
        href="/contact"
        className="flex items-center space-x-3 text-white font-medium bg-primary absolute top-full right-0 py-3 px-5 mt-[1px] rounded-bl-3xl hover:bg-primary-hover shadow-md"
      >
        <Phone className="h-5 w-5" />
        <span>Contactez-nous</span>
      </Link>
    </header>
  );
}
