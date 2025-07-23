import type { Metadata } from "next";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Geoffrey Duran - Artisan menuisier",
    template: "%s | Geoffrey Duran - Artisan menuisier",
  },
  description:
    "Menuiserie artisanale spécialisée dans la création de meubles sur mesure en bois massif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
