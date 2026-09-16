import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Tarekegn — Researcher",
  description: "Personal portfolio of Michael Tarekegn, researcher at the intersection of machine learning, computational biology, and human-centered AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full noise">{children}</body>
    </html>
  );
}
