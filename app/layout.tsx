import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bwalontan.re'),
  title: "Bwa Lontan | Agriculture Syntropique à La Réunion",
  description: "Expert en agriculture syntropique et agroforesterie régénérative à La Réunion. Conception de systèmes agricoles durables inspirés de la forêt tropicale.",
  keywords: "agriculture syntropique, agroforesterie, permaculture réunion, agriculture régénérative, ernst götsch, forêt comestible",
  authors: [{ name: "Bwa Lontan" }],
  openGraph: {
    title: "Bwa Lontan | Agriculture Syntropique",
    description: "Cultivons l'abondance en harmonie avec la nature grâce à l'agriculture syntropique",
    type: "website",
    locale: "fr_FR",
    url: "https://bwalontan.re",
    siteName: "Bwa Lontan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bwa Lontan - Agriculture Syntropique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bwa Lontan | Agriculture Syntropique à La Réunion",
    description: "Expert en agriculture syntropique et agroforesterie régénérative",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
