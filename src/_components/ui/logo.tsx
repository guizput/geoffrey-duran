import { Hammer } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Hammer className="h-8 w-8 text-primary" />
        <div>
          <div className="text-xl [font-variant:small-caps] font-medium text-foreground">
            Geoffrey Duran
          </div>
          <div className="text-sm text-muted-foreground mt-[-4px]">
            Artisan menuisier
          </div>
        </div>
      </Link>
    </div>
  );
}
