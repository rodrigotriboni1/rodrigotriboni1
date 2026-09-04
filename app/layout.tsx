import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { CommandPaletteProvider } from "@/components/CommandPalette";

const jetbrainsMono = localFont({
  variable: "--font-mono",
  src: [
    { path: "./fonts/jetbrains-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/jetbrains-mono-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/jetbrains-mono-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/jetbrains-mono-800.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigo Mialichi Triboni — Product Manager & Engineer",
  description:
    "Rodrigo Mialichi Triboni — Product Manager at AgRisk, Control & Automation Engineering student at UFU.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full bg-bg text-fg antialiased selection:bg-accent-green/25 selection:text-fg">
        <LanguageProvider>
          <CommandPaletteProvider>{children}</CommandPaletteProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
