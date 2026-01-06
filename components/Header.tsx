'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './layout/Navigation'
import MobileMenu from './layout/MobileMenu'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Notre Approche', href: '/approche' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À Propos', href: '/a-propos' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass shadow-lg shadow-forest-deep/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className={`relative transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <Image
                src="/images/logo.svg"
                alt="Bwa Lontan Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-xl text-forest-deep'
                  : 'text-2xl text-white drop-shadow-lg'
              }`}>
                Bwa Lontan
              </span>
              <span className={`text-xs font-accent tracking-wider uppercase transition-all duration-300 ${
                isScrolled
                  ? 'text-canopy opacity-100'
                  : 'text-white/80 opacity-0 -translate-y-1'
              }`}>
                Agriculture Syntropique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation navigation={navigation} isScrolled={isScrolled} />

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center gap-2 font-accent font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-forest text-cream hover:bg-forest-deep'
                : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
            }`}
          >
            <span>Contact</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Menu */}
          <MobileMenu navigation={navigation} isScrolled={isScrolled} />
        </div>
      </nav>
    </header>
  )
}
