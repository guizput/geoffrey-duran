import type { Metadata } from "next";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import { Toaster } from "@/_components/ui/toaster";
import WoodenFrameLayout from "@/_components/WoodenFrameLayout";

export const metadata: Metadata = {
  title: {
    default: "Geoffrey Duran - Artisan menuisier",
    template: "%s | Geoffrey Duran - Artisan menuisier",
  },
  description:
    "Menuiserie artisanale spécialisée dans la création de meubles sur mesure en bois massif.",
  robots:
    process.env.CONTEXT === "branch-deploy" || process.env.BRANCH === "develop"
      ? "noindex, nofollow"
      : "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isTestEnv =
    process.env.CONTEXT === "branch-deploy" || process.env.BRANCH === "develop";

  return (
    <html lang="fr">
      <body className="min-h-screen bg-background">
        {isTestEnv && (
          <div className="sticky top-0 z-50 bg-orange-500 text-white p-2 text-center font-bold text-sm">
            ⚠️ Ceci est une version de test – non destinée à la production
          </div>
        )}
        <Header />
        <WoodenFrameLayout>{children}</WoodenFrameLayout>

        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
