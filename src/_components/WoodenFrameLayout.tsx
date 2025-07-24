import React from "react";

export default function WoodenFrameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white min-h-screen">
      {/* Bordures bois */}
      <div className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-6 bg-[url('/textures/bois-horizontal.jpg')] bg-repeat-x bg-top z-0" />
      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:h-6 bg-[url('/textures/bois-horizontal.jpg')] bg-repeat-x bg-bottom z-0" />
      <div className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:h-full lg:w-6 bg-[url('/textures/bois-vertical.jpg')] bg-repeat-y bg-left z-0" />
      <div className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-6 bg-[url('/textures/bois-vertical.jpg')] bg-repeat-y bg-right z-0" />

      {/* Overlay */}
      <div className="hidden lg:block lg:absolute lg:inset-0 z-10 pointer-events-none bg-amber-950/20"></div>

      {/* Contenu principal */}
      <div className="relative z-20 lg:p-6">{children}</div>
    </div>
  );
}
