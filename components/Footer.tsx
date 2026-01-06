import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  services: [
    { name: 'Conception de projets', href: '/services#conception' },
    { name: 'Formation', href: '/services#formation' },
    { name: 'Réalisation & Suivi', href: '/services#realisation' },
  ],
  company: [
    { name: 'Notre Approche', href: '/approche' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/bwalontan',
      icon: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/bwalontan',
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-forest-deep text-cream overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#1a2e1a"
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-leaf/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20 pb-8 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.svg"
                  alt="Bwa Lontan Logo"
                  fill
                  className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="text-2xl font-display text-cream">Bwa Lontan</span>
            </Link>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Expert en agriculture syntropique pour des écosystèmes agricoles durables,
              productifs et régénératifs à La Réunion.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors group"
                  aria-label={item.name}
                >
                  <svg
                    className="w-5 h-5 text-cream/80 group-hover:text-cream transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-cream transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-canopy rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6">L&apos;entreprise</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-cream transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-canopy rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@bwalontan.re"
                  className="flex items-start gap-3 text-cream/70 hover:text-cream transition-colors group"
                >
                  <div className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cream/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-cream/50 mb-0.5">Email</p>
                    <p>contact@bwalontan.re</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+262692000000"
                  className="flex items-start gap-3 text-cream/70 hover:text-cream transition-colors group"
                >
                  <div className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cream/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-cream/50 mb-0.5">Téléphone</p>
                    <p>+262 692 XX XX XX</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/70">
                <div className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-cream/50 mb-0.5">Zone d&apos;intervention</p>
                  <p>Toute l&apos;île de La Réunion</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="border-t border-cream/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-display text-xl text-cream mb-3">
              Restez informé de nos actualités
            </h4>
            <p className="text-cream/60 mb-6">
              Recevez nos conseils en agriculture syntropique et nos prochains événements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-5 py-3 bg-cream/10 border border-cream/20 rounded-full text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-cream text-forest-deep rounded-full font-accent font-medium hover:bg-sand transition-colors"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/50">
            &copy; {new Date().getFullYear()} Bwa Lontan. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-cream/50">
            <Link href="/mentions-legales" className="hover:text-cream transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-cream transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
