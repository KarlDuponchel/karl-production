import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// ─── Heading font ───
// Replace Geist with your heading font (e.g. import { Inter } from "next/font/google")
const fontHeading = Anton({
  weight: "400",
  variable: "--font-heading",
});

// ─── Body font ───
// Replace Geist with your body font
const fontBody = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

// ─── Mono font ───
const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karl Duponchel | Galerie d'images et vidéos",
  description: "Répertoir d'images et vidéos prises au cours de mes voyages et prestations professionnelles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>{
          children}
        </body>
    </html>
  );
}
