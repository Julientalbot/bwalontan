'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Intersection Observer hook for reveal animations
function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

// Leaf SVG decoration component - Enhanced version
function LeafDecoration({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'outline' | 'filled' }) {
  if (variant === 'outline') {
    return (
      <svg className={className} viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 5C50 5 85 42 85 88C85 134 50 155 50 155C50 155 15 134 15 88C15 42 50 5 50 5Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M50 25V145M32 55C42 50 50 55 50 55M68 75C58 70 50 75 50 75M35 95C45 90 50 95 50 95M65 115C55 110 50 115 50 115"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 0C50 0 90 40 90 90C90 140 50 160 50 160C50 160 10 140 10 90C10 40 50 0 50 0Z"
        fill="currentColor"
      />
      <path
        d="M50 20V150M30 60C40 55 50 60 50 60M70 80C60 75 50 80 50 80M35 100C45 95 50 100 50 100M65 120C55 115 50 120 50 120"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
      />
    </svg>
  )
}

// Floating particles for hero background
function FloatingParticle({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full bg-white/20 backdrop-blur-sm ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

export default function Home() {
  const revealRef = useRevealOnScroll()

  return (
    <div ref={revealRef}>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-tropical-forest.jpg"
            alt="Forêt tropicale - Agriculture syntropique à La Réunion"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements - Enhanced */}
        <div className="absolute top-20 right-10 text-leaf-light/40 w-32 h-48 animate-leaf-sway hidden lg:block">
          <LeafDecoration variant="outline" />
        </div>
        <div className="absolute top-40 right-32 text-gold-light/30 w-20 h-32 animate-leaf-sway hidden lg:block" style={{ animationDelay: '0.5s' }}>
          <LeafDecoration variant="outline" />
        </div>
        <div className="absolute bottom-48 right-1/4 text-cream/25 w-24 h-36 animate-leaf-sway hidden lg:block" style={{ animationDelay: '1s' }}>
          <LeafDecoration variant="outline" />
        </div>
        {/* Floating particles */}
        <div className="absolute top-1/4 right-20 w-3 h-3 rounded-full bg-gold-light/30 animate-float hidden lg:block" />
        <div className="absolute top-1/3 right-40 w-2 h-2 rounded-full bg-leaf-light/40 animate-float hidden lg:block" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-cream/20 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-leaf rounded-full animate-pulse" />
              <span className="text-sm font-accent text-white/90">Agriculture Régénérative à La Réunion</span>
            </div>

            {/* Main Title */}
            <h1 className="text-cream mb-6 animate-fade-in-up delay-100 drop-shadow-lg">
              <span className="block text-gold-light font-accent text-lg tracking-wider uppercase mb-4 drop-shadow-md">Bwa Lontan</span>
              Cultivons des écosystèmes
              <span className="block text-leaf-light drop-shadow-md">nourriciers</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-cream mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl drop-shadow-md" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Spécialistes en agriculture syntropique, nous concevons des jardins-forêts
              productifs qui régénèrent les sols et nourrissent les communautés.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                href="/services"
                className="btn btn-primary group"
              >
                <span>Découvrir nos services</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="btn btn-ghost"
              >
                Démarrer votre projet
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-500">
          <span className="text-xs font-accent text-white/60 tracking-wider uppercase">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#faf6f0"
            />
          </svg>
        </div>
      </section>

      {/* ============================================
          INTRODUCTION SECTION
          ============================================ */}
      <section className="section bg-cream relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="blob-bg-1 -top-40 -left-40" />
        <div className="blob-bg-2 bottom-20 right-10" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="reveal-left">
              <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6">
                Notre philosophie
              </span>
              <h2 className="text-forest-deep mb-6">
                L&apos;agriculture syntropique : <span className="text-canopy">une révolution verte</span>
              </h2>
              <p className="text-lg text-forest/80 mb-6 leading-relaxed">
                L&apos;agriculture syntropique s&apos;inspire du fonctionnement des forêts tropicales
                pour créer des systèmes agricoles productifs et auto-suffisants. En mimant
                les processus naturels de succession écologique, nous créons des écosystèmes
                qui s&apos;enrichissent avec le temps.
              </p>
              <p className="text-lg text-forest/80 mb-8 leading-relaxed">
                Cette approche révolutionnaire permet de produire une grande diversité
                d&apos;aliments tout en régénérant les sols, séquestrant du carbone et
                créant de la biodiversité.
              </p>
              <Link
                href="/approche"
                className="inline-flex items-center gap-2 font-accent font-medium text-canopy hover:text-forest-deep transition-colors group"
              >
                <span>En savoir plus sur notre approche</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="reveal-right">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-canopy/20 to-leaf/10 rounded-[2rem] -rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold/10 to-transparent rounded-[2rem] rotate-2" />

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/syntropic-agriculture-system.jpg"
                    alt="Système d'agriculture syntropique - Diversité de cultures en strates"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl p-4 shadow-xl border border-sand">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-canopy/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-canopy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent font-medium text-forest-deep">+200%</p>
                      <p className="text-sm text-forest/60">de biodiversité</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section className="section bg-cream-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-earth/10 text-earth font-accent text-sm mb-6">
              Ce que nous offrons
            </span>
            <h2 className="text-forest-deep mb-4">Nos Services</h2>
            <p className="text-lg text-forest/70">
              De la conception à la réalisation, nous vous accompagnons dans la création
              d&apos;écosystèmes agricoles durables et productifs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link href="/services#conception" className="reveal card-organic p-8 group flex flex-col" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-canopy to-leaf rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-canopy/20">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-forest-deep mb-4 group-hover:text-canopy transition-colors">Conception de projets</h3>
              <p className="text-forest/70 mb-6">
                Design personnalisé de jardins-forêts et systèmes agroforestiers adaptés
                à votre terrain et vos objectifs.
              </p>
              <ul className="space-y-2 text-sm text-forest/60 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-canopy rounded-full" />
                  Analyse du site et du sol
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-canopy rounded-full" />
                  Plan de plantation détaillé
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-canopy rounded-full" />
                  Calendrier de mise en œuvre
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-canopy font-accent font-medium text-sm group-hover:gap-3 transition-all">
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Service 2 */}
            <Link href="/services#formation" className="reveal card-organic p-8 group flex flex-col" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-earth-warm to-terracotta rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-terracotta/20">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-forest-deep mb-4 group-hover:text-terracotta transition-colors">Formation & Accompagnement</h3>
              <p className="text-forest/70 mb-6">
                Transmission de savoirs et accompagnement technique pour autonomiser
                votre pratique de l&apos;agriculture syntropique.
              </p>
              <ul className="space-y-2 text-sm text-forest/60 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                  Ateliers pratiques
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                  Suivi personnalisé
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                  Formation continue
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-terracotta font-accent font-medium text-sm group-hover:gap-3 transition-all">
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Service 3 */}
            <Link href="/services#realisation" className="reveal card-organic p-8 group flex flex-col" style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-forest to-canopy rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-forest/20">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-forest-deep mb-4 group-hover:text-forest transition-colors">Réalisation & Suivi</h3>
              <p className="text-forest/70 mb-6">
                Mise en œuvre complète de votre projet avec suivi sur plusieurs saisons
                pour assurer son succès.
              </p>
              <ul className="space-y-2 text-sm text-forest/60 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest rounded-full" />
                  Installation du système
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest rounded-full" />
                  Gestion de la succession
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest rounded-full" />
                  Optimisation continue
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-forest font-accent font-medium text-sm group-hover:gap-3 transition-all">
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* CTA for all services */}
          <div className="text-center mt-12 reveal">
            <Link
              href="/services"
              className="btn btn-secondary inline-flex items-center gap-2 group"
            >
              <span>Voir tous nos services</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US SECTION
          ============================================ */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Benefits List */}
            <div>
              <div className="reveal">
                <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-accent text-sm mb-6">
                  Nos engagements
                </span>
                <h2 className="text-forest-deep mb-12">
                  Pourquoi choisir <span className="text-canopy">Bwa Lontan</span> ?
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    ),
                    title: 'Expertise locale',
                    description: 'Connaissance approfondie des écosystèmes réunionnais et des espèces adaptées au climat tropical.',
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    ),
                    title: 'Approche holistique',
                    description: 'Vision globale intégrant production alimentaire, régénération des sols et biodiversité.',
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    ),
                    title: 'Résultats durables',
                    description: 'Systèmes conçus pour s\'améliorer avec le temps, créant une abondance croissante.',
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    ),
                    title: 'Accompagnement personnalisé',
                    description: 'Suivi adapté à vos besoins, de la conception à l\'autonomie complète.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="reveal flex gap-5 p-4 rounded-2xl transition-colors hover:bg-sand/30"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-canopy/20 to-leaf/10 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-canopy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-display text-forest-deep mb-1">{item.title}</h4>
                      <p className="text-forest/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10+', label: 'Années d\'expérience', color: 'from-forest to-canopy' },
                  { number: '50+', label: 'Projets réalisés', color: 'from-canopy to-leaf' },
                  { number: '100%', label: 'Clients satisfaits', color: 'from-earth-warm to-terracotta' },
                  { number: '974', label: 'Île de La Réunion', color: 'from-gold to-gold-light' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="relative bg-cream border border-sand rounded-3xl p-8 text-center transition-transform group-hover:-translate-y-1">
                      <p className={`text-4xl md:text-5xl font-display bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.number}
                      </p>
                      <p className="text-sm font-accent text-forest/60">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
          ============================================ */}
      <section className="section bg-cream-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6">
              Témoignages
            </span>
            <h2 className="text-forest-deep mb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-forest/70">
              Découvrez les retours d&apos;expérience de ceux qui ont transformé leur terrain
              avec l&apos;agriculture syntropique.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Grâce à Bwa Lontan, notre terrain aride est devenu un véritable jardin d'Éden. En deux ans, nous récoltons fruits, légumes et aromates en abondance.",
                author: "Marie-Claire D.",
                role: "Propriétaire à Saint-Paul",
                initials: "MC",
              },
              {
                quote: "L'accompagnement personnalisé fait toute la différence. L'équipe nous a guidés pas à pas, et aujourd'hui notre forêt comestible est autonome.",
                author: "Jean-Pierre R.",
                role: "Agriculteur à Cilaos",
                initials: "JP",
              },
              {
                quote: "Une approche révolutionnaire qui respecte la nature. Notre sol s'est régénéré de façon spectaculaire, et la biodiversité a explosé sur notre parcelle.",
                author: "Sophie & Marc L.",
                role: "Éco-lieu à Sainte-Rose",
                initials: "SL",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="reveal card-organic p-8 flex flex-col"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <svg className="w-10 h-10 text-canopy/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-forest/80 leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-sand">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-canopy to-leaf flex items-center justify-center">
                    <span className="text-cream font-accent font-medium text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-accent font-medium text-forest-deep">{testimonial.author}</p>
                    <p className="text-sm text-forest/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          QUOTE SECTION
          ============================================ */}
      <section className="section section-dark relative overflow-hidden">
        {/* Texture overlay */}
        <div className="texture-grain absolute inset-0" />

        {/* Decorative leaves */}
        <div className="absolute top-10 left-10 text-leaf/10 w-24 h-36 animate-leaf-sway">
          <LeafDecoration />
        </div>
        <div className="absolute bottom-10 right-10 text-leaf/10 w-20 h-32 animate-leaf-sway" style={{ animationDelay: '2s' }}>
          <LeafDecoration />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center reveal-scale">
            {/* Quote marks */}
            <svg className="w-16 h-16 mx-auto mb-8 text-leaf/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="text-2xl md:text-4xl font-display text-cream leading-relaxed mb-8">
              La nature ne connaît pas de problèmes, seulement des solutions.
              En travaillant avec elle plutôt que contre elle, nous créons
              l&apos;abondance dont nous avons besoin.
            </blockquote>

            <footer>
              <cite className="not-italic">
                <span className="block text-lg font-accent text-gold-light mb-1">Ernst Götsch</span>
                <span className="text-sm text-cream/60">Père de l&apos;agriculture syntropique</span>
              </cite>
            </footer>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - Enhanced
          ============================================ */}
      <section className="section bg-cream relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-canopy/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="reveal text-center bg-gradient-to-br from-forest-deep via-forest to-canopy rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">
              {/* Decorative elements inside card */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-leaf/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent opacity-50" />

              {/* Decorative leaf icons */}
              <div className="absolute top-8 left-8 text-cream/10 w-16 h-24 hidden md:block">
                <LeafDecoration variant="outline" />
              </div>
              <div className="absolute bottom-8 right-8 text-cream/10 w-12 h-20 hidden md:block">
                <LeafDecoration variant="outline" />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 bg-cream/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-cream/20">
                  <svg className="w-10 h-10 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>

                <h2 className="text-cream mb-6 drop-shadow-lg">
                  Prêt à transformer votre terrain en écosystème nourricier ?
                </h2>
                <p className="text-xl text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Contactez-nous pour discuter de votre projet et découvrir comment
                  l&apos;agriculture syntropique peut révolutionner votre approche du jardinage.
                </p>

                {/* Benefits mini-list */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {['Devis gratuit', 'Accompagnement personnalisé', 'Expertise locale'].map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-sm text-cream/90 border border-cream/20">
                      <svg className="w-4 h-4 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn bg-cream text-forest-deep hover:bg-gold-light hover:text-forest-deep group shadow-lg"
                  >
                    <span>Demander un devis gratuit</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/realisations"
                    className="btn btn-ghost hover:bg-cream/10"
                  >
                    Voir nos réalisations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
