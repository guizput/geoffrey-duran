"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./ui/logo";

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Prestations",
    href: "/prestations",
  },
  { name: "À propos", href: "/a-propos" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 relative">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <Logo />

          {/* Desktop Navigation */}
          <div className="ml-10 hidden lg:flex lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
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
