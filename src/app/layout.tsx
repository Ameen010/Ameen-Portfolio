import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ameen-portfolio.pages.dev'),
  title: "Ameen Noushad | Odoo Techno-Functional Developer & ERP Expert",
  description: "Portfolio of Ameen Noushad, an expert Odoo Techno-Functional & Full-Stack Developer. Delivering enterprise ERP solutions from Tiny ERP to Odoo 19.",
  keywords: "Ameen Noushad, Odoo Developer, ERP specialist, Odoo techno functional developer, AI Solutions Architect, Full Stack Developer, Python Developer, Kerala",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Ameen Noushad | Odoo Techno-Functional Developer & ERP Expert",
    description: "Portfolio of Ameen Noushad, an expert Odoo Techno-Functional & Full-Stack Developer. Delivering enterprise ERP solutions from Tiny ERP to Odoo 19.",
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
