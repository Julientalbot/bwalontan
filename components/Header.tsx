import Link from 'next/link'
import Image from 'next/image'
import Navigation from './layout/Navigation'
import MobileMenu from './layout/MobileMenu'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Notre Approche', href: '/approche' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/logo.svg" 
              alt="Bwa Lontan Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold font-playfair text-green-800">Bwa Lontan</span>
          </Link>
          
          <Navigation navigation={navigation} />
          <MobileMenu navigation={navigation} />
        </div>
      </nav>
    </header>
  )
}