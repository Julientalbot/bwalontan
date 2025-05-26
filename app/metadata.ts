import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://bwalontan.re'),
  title: {
    default: 'Bwa Lontan | Consultant en Ergonomie à La Réunion',
    template: '%s | Bwa Lontan'
  },
  description: 'Expert en ergonomie du travail à La Réunion. Audit ergonomique, conception d\'espaces de travail, prévention des TMS et formation pour améliorer le bien-être au travail.',
  keywords: ['ergonomie réunion', 'consultant ergonomie', 'prévention TMS', 'aménagement bureau', 'bien-être travail', 'audit ergonomique', 'formation ergonomie', 'poste de travail', 'santé au travail'],
  authors: [{ name: 'Bwa Lontan' }],
  creator: 'Bwa Lontan',
  publisher: 'Bwa Lontan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Bwa Lontan | Consultant en Ergonomie',
    description: 'Améliorez le bien-être et la productivité de vos équipes avec nos solutions ergonomiques',
    url: 'https://bwalontan.re',
    siteName: 'Bwa Lontan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bwa Lontan - Ergonomie du travail',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bwa Lontan | Consultant en Ergonomie',
    description: 'Expert en ergonomie du travail à La Réunion',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bwalontan.re',
  },
}

export const pageMetadata = {
  services: {
    title: 'Services',
    description: 'Découvrez nos services d\'ergonomie : audit, conception d\'espaces, formation et accompagnement personnalisé.',
  },
  approche: {
    title: 'Notre Approche',
    description: 'Une approche holistique de l\'ergonomie pour créer des environnements de travail sains et productifs.',
  },
  realisations: {
    title: 'Réalisations',
    description: 'Nos projets réussis et témoignages clients en ergonomie du travail à La Réunion.',
  },
  apropos: {
    title: 'À Propos',
    description: 'Découvrez Bwa Lontan, votre expert en ergonomie du travail à La Réunion.',
  },
  contact: {
    title: 'Contact',
    description: 'Contactez-nous pour une consultation personnalisée en ergonomie du travail.',
  },
}