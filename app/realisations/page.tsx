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

const projets = [
  {
    id: 1,
    titre: 'Jardin-forêt familial',
    lieu: 'Saint-Pierre',
    surface: '1000 m²',
    date: '2023',
    description: 'Transformation d\'un terrain en friche en écosystème productif avec plus de 50 espèces comestibles, créant un véritable paradis nourricier pour toute la famille.',
    resultats: [
      '30% d\'augmentation de la matière organique du sol',
      'Production diversifiée toute l\'année',
      'Autonomie en fruits pour une famille de 4 personnes',
    ],
    testimonial: 'Grâce à Bwa Lontan, notre jardin est devenu un véritable paradis nourricier. Les enfants adorent y passer du temps !',
    client: 'Famille Martin',
    image: '/images/syntropie.jpg',
  },
  {
    id: 2,
    titre: 'Système agroforestier',
    lieu: 'Sainte-Rose',
    surface: '2 hectares',
    date: '2022',
    description: 'Conception d\'un système syntropique intégrant cultures vivrières et arbres fruitiers tropicaux pour une exploitation agricole diversifiée et résiliente.',
    resultats: [
      'Réduction de 80% des intrants',
      'Augmentation de la biodiversité locale',
      'Revenus diversifiés sur 5 productions',
    ],
    testimonial: 'L\'approche syntropique a révolutionné ma façon de cultiver. Mon exploitation est plus résiliente et productive.',
    client: 'Jean-Paul, agriculteur',
    image: '/images/foret-tropicale.jpg',
  },
  {
    id: 3,
    titre: 'Jardin pédagogique',
    lieu: 'Saint-Denis',
    surface: '500 m²',
    date: '2023',
    description: 'Création d\'un espace d\'apprentissage innovant pour sensibiliser les jeunes à l\'agriculture durable et aux écosystèmes de La Réunion.',
    resultats: [
      '200 élèves formés',
      '15 variétés endémiques plantées',
      'Compost pédagogique installé',
    ],
    testimonial: 'Un projet inspirant qui permet aux enfants de reconnecter avec la nature et comprendre d\'où vient leur nourriture.',
    client: 'École Les Tamarins',
    image: '/images/jardin-creole.jpg',
  },
]

const stats = [
  { value: '25+', label: 'Projets réalisés', color: 'from-leaf to-canopy' },
  { value: '15 ha', label: 'Transformés', color: 'from-canopy to-forest' },
  { value: '500+', label: 'Espèces plantées', color: 'from-gold to-terracotta' },
  { value: '100%', label: 'Clients satisfaits', color: 'from-terracotta to-earth' },
]

const typesProjets = [
  {
    title: 'Jardins familiaux',
    description: 'Transformation de jardins privés en écosystèmes nourriciers pour l\'autonomie alimentaire familiale.',
    details: ['De 200 m² à 5000 m²', 'Design personnalisé', 'Formation incluse'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'from-leaf/20 to-canopy/20',
    borderColor: 'border-leaf/30',
    iconBg: 'from-leaf to-canopy',
  },
  {
    title: 'Exploitations agricoles',
    description: 'Conversion de terres agricoles vers des systèmes syntropiques productifs et régénératifs.',
    details: ['De 1 à 50 hectares', 'Transition progressive', 'Suivi sur 3 ans'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-gold/20 to-terracotta/20',
    borderColor: 'border-gold/30',
    iconBg: 'from-gold to-terracotta',
  },
  {
    title: 'Espaces collectifs',
    description: 'Création de jardins partagés, espaces pédagogiques et forêts comestibles communautaires.',
    details: ['Écoles et associations', 'Collectivités', 'Animation d\'ateliers'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-canopy/20 to-forest/20',
    borderColor: 'border-canopy/30',
    iconBg: 'from-canopy to-forest',
  },
]

export default function Realisations() {
  useRevealOnScroll()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-canopy" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-leaf/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 texture-grain opacity-20" />

        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <span className="reveal inline-block text-gold font-accent text-sm tracking-[0.2em] uppercase mb-6">
              Portfolio
            </span>
            <h1 className="reveal font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-8 leading-[1.1]" style={{ animationDelay: '100ms' }}>
              Nos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf to-gold">
                Réalisations
              </span>
            </h1>
            <p className="reveal font-body text-xl md:text-2xl text-cream/80 max-w-2xl leading-relaxed" style={{ animationDelay: '200ms' }}>
              Découvrez comment nous transformons des terrains ordinaires en
              écosystèmes nourriciers extraordinaires.
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

      {/* Projets Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {projets.map((projet, index) => (
              <div key={projet.id} className="max-w-6xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Content */}
                  <div className="reveal" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block bg-leaf/10 text-leaf font-accent text-sm px-4 py-1.5 rounded-full">
                        {projet.surface}
                      </span>
                      <span className="inline-block bg-gold/10 text-gold font-accent text-sm px-4 py-1.5 rounded-full">
                        {projet.date}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl text-forest-deep mb-2">
                      {projet.titre}
                    </h2>
                    <p className="font-accent text-canopy mb-6">{projet.lieu}</p>

                    <p className="font-body text-forest/80 mb-8 leading-relaxed">
                      {projet.description}
                    </p>

                    <h3 className="font-display text-xl text-forest-deep mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Résultats obtenus
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {projet.resultats.map((resultat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-leaf to-canopy flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-body text-forest/80">{resultat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Testimonial */}
                    <div className="card-organic p-6 bg-gradient-to-br from-sand/50 to-cream">
                      <svg className="w-8 h-8 text-gold/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="font-body text-forest/80 italic mb-4 leading-relaxed">
                        {projet.testimonial}
                      </p>
                      <p className="font-accent font-medium text-forest-deep">
                        — {projet.client}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="reveal" style={{ animationDelay: `${index * 50 + 100}ms` }}>
                    <div className="relative">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={projet.image}
                          alt={projet.titre}
                          fill
                          className="object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent" />
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-2xl p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-leaf to-canopy flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-accent text-xs text-forest/60">Projet</p>
                            <p className="font-display text-forest-deep">Réussi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-forest-deep relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 texture-grain opacity-30" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-leaf/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-gold font-accent text-sm tracking-[0.2em] uppercase mb-4">
              Impact
            </span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cream" style={{ animationDelay: '100ms' }}>
              Notre impact en chiffres
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal text-center group"
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className={`font-display text-5xl md:text-6xl mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="font-accent text-cream/70 group-hover:text-cream transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Projets Section */}
      <section className="py-24 bg-sand/50 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-leaf/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-canopy font-accent text-sm tracking-[0.2em] uppercase mb-4">
              Expertise
            </span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-forest-deep" style={{ animationDelay: '100ms' }}>
              Tous types de projets
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {typesProjets.map((type, index) => (
              <div
                key={type.title}
                className={`reveal card-organic p-8 bg-gradient-to-br ${type.color} border ${type.borderColor} group`}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.iconBg} flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {type.icon}
                </div>
                <h3 className="font-display text-xl text-forest-deep mb-4">
                  {type.title}
                </h3>
                <p className="font-body text-forest/70 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 font-accent text-sm text-forest/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-canopy/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="reveal card-organic p-12 md:p-16 bg-gradient-to-br from-forest-deep via-forest to-canopy text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-leaf/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 texture-grain opacity-20" />

              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
                  Votre projet pourrait être le prochain !
                </h2>
                <p className="font-body text-xl text-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Rejoignez le mouvement de l&apos;agriculture régénérative et créez
                  votre propre oasis d&apos;abondance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-cream text-forest-deep px-8 py-4 rounded-full font-accent font-medium text-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                >
                  <span>Démarrer mon projet</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
