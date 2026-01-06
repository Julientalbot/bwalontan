'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
  isScrolled?: boolean;
}

export default function MobileMenu({ navigation, isScrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
          isOpen
            ? 'bg-cream'
            : isScrolled
              ? 'bg-sand/50 hover:bg-sand'
              : 'bg-white/10 hover:bg-white/20'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
      >
        <div className="relative w-5 h-4 flex flex-col justify-between">
          <span
            className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
              isOpen
                ? 'bg-forest-deep rotate-45 translate-y-[7px]'
                : isScrolled
                  ? 'bg-forest-deep'
                  : 'bg-white'
            }`}
          />
          <span
            className={`block h-0.5 rounded-full transition-all duration-300 ${
              isOpen
                ? 'opacity-0 scale-0'
                : isScrolled
                  ? 'bg-forest-deep'
                  : 'bg-white'
            }`}
          />
          <span
            className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
              isOpen
                ? 'bg-forest-deep -rotate-45 -translate-y-[7px]'
                : isScrolled
                  ? 'bg-forest-deep'
                  : 'bg-white'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-forest-deep/80 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-cream shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-leaf-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative h-full flex flex-col pt-24 pb-8 px-8">
            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href

                  return (
                    <li
                      key={item.name}
                      className={`transition-all duration-500 ${
                        isOpen
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: isOpen ? `${150 + index * 50}ms` : '0ms' }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 rounded-xl font-display text-2xl transition-all duration-300 ${
                          isActive
                            ? 'text-forest-deep bg-sand'
                            : 'text-forest hover:text-forest-deep hover:bg-sand/50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* CTA Button */}
            <div
              className={`mt-8 transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-forest text-cream rounded-full font-accent font-medium text-lg transition-all duration-300 hover:bg-forest-deep"
                onClick={() => setIsOpen(false)}
              >
                <span>Démarrer votre projet</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Contact Info */}
            <div
              className={`mt-8 pt-8 border-t border-sand transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
            >
              <p className="text-sm text-forest/60 font-accent">Contact</p>
              <a
                href="mailto:contact@bwalontan.re"
                className="block text-forest hover:text-canopy transition-colors mt-1"
              >
                contact@bwalontan.re
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
