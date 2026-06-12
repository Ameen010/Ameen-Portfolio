import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMEENN — Odoo Techno-Functional Developer | ERP Specialist",
  description: "Premium portfolio of Ameen Noushad — Odoo Techno-Functional Developer, ERP Specialist & Full-Stack Developer. Building intelligent enterprise solutions from Tiny ERP to Odoo 19.",
  keywords: "Ameen Noushad, Odoo Developer, ERP specialist, Odoo techno functional developer, AI Solutions Architect, Full Stack Developer, Python Developer, Kerala",
  openGraph: {
    title: "AMEENN — Portfolio",
    description: "Odoo Techno-Functional Developer | ERP Specialist | Full-Stack Developer",
    type: "website",
  },
  verification: {
    google: "oG8aJt_Vz89ctUl51hbNFhi0TLv8NN0Ui6NQbZPtHlQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
