'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function useRevealOnScroll() {
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

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const principles = [
  {
    title: 'Succession naturelle',
    description: 'Nous guidons l\'évolution naturelle de l\'écosystème, depuis les plantes pionnières jusqu\'aux espèces climaciques, créant un système qui mature et s\'enrichit avec le temps.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Stratification',
    description: 'Comme dans une forêt, nous utilisons toutes les strates végétales (émergente, haute, moyenne, basse, herbacée) pour optimiser l\'utilisation de l\'espace et de la lumière.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Densité et diversité',
    description: 'Des plantations denses et diversifiées créent des synergies entre les plantes, réduisent la pression des ravageurs et maximisent la production de biomasse.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Taille stratégique',
    description: 'La taille régulière stimule la croissance, rajeunit les plantes et produit la biomasse nécessaire pour nourrir le sol et accélérer la succession écologique.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L12 12" />
      </svg>
    ),
  },
]

const methodology = [
  {
    step: '01',
    title: 'Observer',
    description: 'Comprendre le lieu, son histoire, ses potentiels et ses contraintes à travers une analyse approfondie.',
    color: 'from-leaf to-canopy',
  },
  {
    step: '02',
    title: 'Concevoir',
    description: 'Créer un design qui optimise les ressources, les synergies et répond à vos objectifs.',
    color: 'from-canopy to-forest',
  },
  {
    step: '03',
    title: 'Implanter',
    description: 'Mettre en œuvre le système avec soin, précision et dans le respect des cycles naturels.',
    color: 'from-forest to-forest-deep',
  },
  {
    step: '04',
    title: 'Accompagner',
    description: 'Guider l\'évolution du système vers sa maturité et transmettre les savoirs nécessaires.',
    color: 'from-forest-deep to-earth',
  },
]

const benefits = [
  {
    category: 'Pour l\'environnement',
    color: 'from-leaf/20 to-canopy/20',
    borderColor: 'border-leaf/30',
    iconColor: 'text-leaf',
    items: [
      'Régénération des sols',
      'Séquestration du carbone',
      'Augmentation de la biodiversité',
      'Protection des ressources en eau',
      'Résilience climatique',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    category: 'Pour la production',
    color: 'from-gold/20 to-terracotta/20',
    borderColor: 'border-gold/30',
    iconColor: 'text-gold',
    items: [
      'Diversité des récoltes',
      'Production étalée sur l\'année',
      'Augmentation des rendements',
      'Qualité nutritionnelle supérieure',
      'Réduction des intrants',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    category: 'Pour les personnes',
    color: 'from-terracotta/20 to-earth/20',
    borderColor: 'border-terracotta/30',
    iconColor: 'text-terracotta',
    items: [
      'Autonomie alimentaire',
      'Revenus diversifiés',
      'Environnement de travail sain',
      'Transmission de savoirs',
      'Connexion à la nature',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const adaptations = [
  {
    title: 'Les espèces endémiques et indigènes',
    description: 'Nous valorisons la flore locale pour préserver la biodiversité unique de l\'île tout en intégrant des espèces productives adaptées.',
  },
  {
    title: 'La gestion cyclonique',
    description: 'Nos designs tiennent compte des vents violents et des fortes pluies, avec des espèces résistantes et des aménagements protecteurs.',
  },
  {
    title: 'Les microclimats',
    description: 'De la côte aux hauts, nous adaptons nos systèmes aux conditions spécifiques de chaque zone altitudinale.',
  },
  {
    title: 'Les savoirs créoles',
    description: 'Nous intégrons les connaissances traditionnelles des jardins créoles dans nos designs modernes.',
  },
]

export default function Approche() {
  useRevealOnScroll()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/syntropie.jpg"
            alt="Agriculture syntropique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/60" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-leaf/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <span className="reveal inline-block text-gold font-accent text-sm tracking-[0.2em] uppercase mb-6">
              Notre philosophie
            </span>
            <h1 className="reveal font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-8 leading-[1.1]" style={{ animationDelay: '100ms' }}>
              L&apos;agriculture{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf to-gold">
                syntropique
              </span>
            </h1>
            <p className="reveal font-body text-xl md:text-2xl text-cream/80 max-w-2xl leading-relaxed" style={{ animationDelay: '200ms' }}>
              Une vision holistique qui s&apos;inspire de la nature pour créer l&apos;abondance
              tout en régénérant les écosystèmes.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--color-cream)"/>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-forest-deep mb-8">
                Travailler avec la nature
              </h2>
              <p className="font-body text-lg text-forest/80 leading-relaxed">
                Développée par Ernst Götsch au Brésil, l&apos;agriculture syntropique est une
                approche révolutionnaire qui considère l&apos;agriculture comme un moyen de
                régénérer les écosystèmes plutôt que de les exploiter.
              </p>
            </div>

            <div className="reveal card-organic p-8 md:p-12" style={{ animationDelay: '150ms' }}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-leaf/20 to-canopy/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-canopy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-forest-deep mb-4">
                    Le principe de syntropie
                  </h3>
                  <p className="font-body text-forest/80 leading-relaxed">
                    Le terme &quot;syntropie&quot; s&apos;oppose à l&apos;entropie : au lieu de tendre vers
                    le désordre et la dégradation, les systèmes syntropiques évoluent vers
                    plus de complexité, de vie et d&apos;abondance. C&apos;est une agriculture qui
                    <strong className="text-forest-deep"> donne plus qu&apos;elle ne prend</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principes Section */}
      <section className="py-24 bg-sand/50 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-leaf/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-canopy font-accent text-sm tracking-[0.2em] uppercase mb-4">
              Fondations
            </span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-forest-deep" style={{ animationDelay: '100ms' }}>
              Les principes fondamentaux
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="reveal card-organic p-8 group"
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-canopy/20 to-leaf/20 flex items-center justify-center text-canopy transition-all duration-300 group-hover:scale-110 group-hover:from-canopy/30 group-hover:to-leaf/30">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-forest-deep mb-3">
                      {principle.title}
                    </h3>
                    <p className="font-body text-forest/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptation Réunion Section */}
      <section className="py-24 bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="reveal relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/foret-tropicale.jpg"
                  alt="Forêt tropicale de La Réunion"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-terracotta flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-accent text-sm text-forest/60">Adaptation locale</p>
                    <p className="font-display text-lg text-forest-deep">Île de La Réunion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="reveal inline-block text-terracotta font-accent text-sm tracking-[0.2em] uppercase mb-4">
                Contexte réunionnais
              </span>
              <h2 className="reveal font-display text-4xl md:text-5xl text-forest-deep mb-8" style={{ animationDelay: '100ms' }}>
                Adaptée à notre île
              </h2>
              <p className="reveal font-body text-lg text-forest/80 mb-10 leading-relaxed" style={{ animationDelay: '150ms' }}>
                À La Réunion, nous adaptons ces principes au contexte tropical insulaire
                unique de l&apos;île. Notre approche intègre les spécificités locales pour
                des résultats optimaux.
              </p>

              <div className="space-y-6">
                {adaptations.map((adaptation, index) => (
                  <div
                    key={adaptation.title}
                    className="reveal flex items-start gap-4"
                    style={{ animationDelay: `${200 + index * 75}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-leaf to-canopy flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-forest-deep mb-1">
                        {adaptation.title}
                      </h4>
                      <p className="font-body text-forest/70">
                        {adaptation.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie Section */}
      <section className="py-24 bg-forest-deep relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 texture-grain opacity-30" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-gold font-accent text-sm tracking-[0.2em] uppercase mb-4">
              Processus
            </span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cream" style={{ animationDelay: '100ms' }}>
              Notre méthodologie
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {methodology.map((step, index) => (
              <div
                key={step.step}
                className="reveal text-center group"
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <span className="font-display text-3xl text-cream">{step.step}</span>
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">{step.title}</h3>
                <p className="font-body text-cream/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connection line on desktop */}
          <div className="hidden lg:block absolute top-[calc(50%-2rem)] left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-leaf/50 via-canopy/50 to-forest/50" />
        </div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-24 bg-cream relative">
        {/* Wave divider top */}
        <div className="absolute top-0 left-0 right-0 -translate-y-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1320 50 1200 60 1080 50C960 40 840 20 720 15C600 10 480 20 360 30C240 40 120 50 60 55L0 60Z" fill="var(--color-cream)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-canopy font-accent text-sm tracking-[0.2em] uppercase mb-4">
              Impacts positifs
            </span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-forest-deep" style={{ animationDelay: '100ms' }}>
              Les bénéfices de notre approche
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.category}
                className={`reveal card-organic p-8 bg-gradient-to-br ${benefit.color} border ${benefit.borderColor}`}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mb-6 ${benefit.iconColor}`}>
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl text-forest-deep mb-6">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-forest/80">
                      <div className={`w-2 h-2 rounded-full ${benefit.iconColor.replace('text-', 'bg-')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-canopy via-forest to-forest-deep relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-leaf/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 texture-grain opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal font-display text-4xl md:text-5xl text-cream mb-6">
              Prêt à adopter une agriculture{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-leaf">
                régénérative
              </span>{' '}
              ?
            </h2>
            <p className="reveal font-body text-xl text-cream/80 mb-10 leading-relaxed" style={{ animationDelay: '100ms' }}>
              Découvrez comment notre approche peut transformer votre terrain
              en un écosystème productif et résilient.
            </p>
            <Link
              href="/contact"
              className="reveal inline-flex items-center gap-3 bg-cream text-forest-deep px-8 py-4 rounded-full font-accent font-medium text-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
              style={{ animationDelay: '200ms' }}
            >
              <span>Parlons de votre projet</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
