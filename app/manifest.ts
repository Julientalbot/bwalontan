import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bwa Lontan - Agriculture Syntropique',
    short_name: 'Bwa Lontan',
    description: 'Expert en agriculture syntropique et agroforesterie régénérative à La Réunion',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#166534',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}