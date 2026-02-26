import { ThemeToggle } from "@/components/theme-toggle";
import { QrCode } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <QrCode className="h-6 w-6 text-[var(--primary)]" />
          <span className="text-lg font-bold">QR Massive</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
