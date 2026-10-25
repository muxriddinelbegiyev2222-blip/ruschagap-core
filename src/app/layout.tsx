import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruschagap — Rus tilini 90 kunda",
  description:
    "O'zbek tilida so'zlashuvchilar uchun rus tilini 0 dan B1/B2 darajagacha o'rgatuvchi AI platforma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
