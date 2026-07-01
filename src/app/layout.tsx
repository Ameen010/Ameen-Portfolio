import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ameen-portfolio.pages.dev'),
  title: "AMEENN — Odoo Techno-Functional Developer | ERP Specialist",
  description: "Premium portfolio of Ameen Noushad — Odoo Techno-Functional Developer, ERP Specialist & Full-Stack Developer. Building intelligent enterprise solutions from Tiny ERP to Odoo 19.",
  keywords: "Ameen Noushad, Odoo Developer, ERP specialist, Odoo techno functional developer, AI Solutions Architect, Full Stack Developer, Python Developer, Kerala",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "AMEENN — Odoo Techno-Functional Developer | ERP Specialist",
    description: "Premium portfolio of Ameen Noushad — Odoo Techno-Functional Developer, ERP Specialist & Full-Stack Developer.",
    url: 'https://ameen-portfolio.pages.dev',
    siteName: 'Ameen Noushad Portfolio',
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
