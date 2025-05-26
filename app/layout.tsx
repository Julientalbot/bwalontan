import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
  title: "Bwa Lontan | Consultant en Ergonomie à La Réunion",
  description: "Expert en ergonomie du travail à La Réunion. Audit ergonomique, conception d'espaces de travail, prévention des TMS et formation pour améliorer le bien-être au travail.",
  keywords: "ergonomie réunion, consultant ergonomie, prévention TMS, aménagement bureau, bien-être travail, audit ergonomique",
  authors: [{ name: "Bwa Lontan" }],
  openGraph: {
    title: "Bwa Lontan | Consultant en Ergonomie",
    description: "Améliorez le bien-être et la productivité de vos équipes avec nos solutions ergonomiques",
    type: "website",
    locale: "fr_FR",
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
          <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold font-playfair text-green-800">
                  Bwa Lontan
                </Link>
                <ul className="flex space-x-6">
                  <li><Link href="/services" className="hover:text-green-600 transition-colors">Services</Link></li>
                  <li><Link href="/approche" className="hover:text-green-600 transition-colors">Notre Approche</Link></li>
                  <li><Link href="/realisations" className="hover:text-green-600 transition-colors">Réalisations</Link></li>
                  <li><Link href="/a-propos" className="hover:text-green-600 transition-colors">À Propos</Link></li>
                  <li><Link href="/contact" className="hover:text-green-600 transition-colors">Contact</Link></li>
                </ul>
              </div>
            </nav>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-green-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-playfair text-xl mb-4">Bwa Lontan</h3>
                  <p className="text-green-100">Expert en ergonomie du travail pour des espaces sains et productifs</p>
                </div>
                <div>
                  <h3 className="font-playfair text-xl mb-4">Contact</h3>
                  <p className="text-green-100">contact@bwalontan.re</p>
                  <p className="text-green-100">+262 692 123 456</p>
                </div>
                <div>
                  <h3 className="font-playfair text-xl mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-green-100 hover:text-white">Facebook</a>
                    <a href="#" className="text-green-100 hover:text-white">Instagram</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-100">
                <p>&copy; 2025 Bwa Lontan. Tous droits réservés.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
