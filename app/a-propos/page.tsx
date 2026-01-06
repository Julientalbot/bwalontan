'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

const team = [
  {
    name: 'Amandine',
    role: 'Co-fondatrice & Experte en design syntropique',
    bio: 'Ingénieure agronome de formation, Amandine apporte son expertise en conception de systèmes agroforestiers et sa connaissance approfondie de la flore tropicale. Passionnée par les interactions plantes-sol, elle excelle dans la création de designs productifs et harmonieux.',
    color: 'from-canopy to-leaf',
  },
  {
    name: 'Arnaud',
    role: 'Co-fondateur & Spécialiste en gestion écologique',
    bio: 'Fort d\'une expérience en développement rural et gestion de projets, Arnaud se spécialise dans la mise en œuvre pratique et le suivi des systèmes syntropiques. Sa vision holistique permet d\'intégrer les dimensions sociales et économiques dans chaque projet.',
    color: 'from-earth-warm to-terracotta',
  },
]

const values = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Régénération',
    description: 'Restaurer la vie et la fertilité des sols pour les générations futures',
    color: 'from-canopy to-leaf',
    bgColor: 'bg-canopy/10',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    title: 'Collaboration',
    description: 'Travailler ensemble pour créer des synergies positives',
    color: 'from-earth-warm to-terracotta',
    bgColor: 'bg-terracotta/10',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    title: 'Transmission',
    description: 'Partager les savoirs pour multiplier l\'impact positif',
    color: 'from-gold to-gold-light',
    bgColor: 'bg-gold/10',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'Résilience',
    description: 'Créer des systèmes capables de s\'adapter et de prospérer',
    color: 'from-forest to-canopy',
    bgColor: 'bg-forest/10',
  },
]

export default function APropos() {
  const revealRef = useRevealOnScroll()

  return (
    <div ref={revealRef}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-sand" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-canopy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6 animate-fade-in-up">
              Notre histoire
            </span>
            <h1 className="text-forest-deep mb-6 animate-fade-in-up delay-100">
              À Propos
            </h1>
            <p className="text-xl text-forest/80 leading-relaxed animate-fade-in-up delay-200">
              L&apos;histoire de Bwa Lontan, c&apos;est l&apos;histoire d&apos;une passion pour
              la terre et d&apos;une vision pour l&apos;agriculture de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="reveal-left">
              <span className="inline-block px-4 py-1 rounded-full bg-earth/10 text-earth font-accent text-sm mb-6">
                Nos origines
              </span>
              <h2 className="text-forest-deep mb-8">Notre histoire</h2>

              <div className="space-y-6 text-lg text-forest/70 leading-relaxed">
                <p>
                  Bwa Lontan est né de la rencontre entre Amandine et Arnaud, deux passionnés
                  d&apos;agroécologie unis par une vision commune : transformer l&apos;agriculture à
                  La Réunion en s&apos;inspirant de la sagesse de la nature tropicale.
                </p>
                <p>
                  Après des années d&apos;expérience dans le développement rural et la gestion de
                  projets agricoles, nous avons découvert l&apos;agriculture syntropique lors d&apos;un
                  voyage au Brésil. Cette approche révolutionnaire nous a ouvert les yeux sur
                  le potentiel immense de travailler avec la nature plutôt que contre elle.
                </p>
                <p>
                  De retour à La Réunion, nous avons commencé à expérimenter ces principes
                  sur notre propre terrain, adaptant les techniques au contexte insulaire
                  tropical unique de l&apos;île.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="reveal-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-canopy/20 to-leaf/10 rounded-[2rem] -rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold/10 to-transparent rounded-[2rem] rotate-2" />

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-tropical-forest.jpg"
                    alt="Notre histoire - Forêt tropicale"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent" />
                </div>

                {/* Quote badge */}
                <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl p-6 shadow-xl border border-sand max-w-xs">
                  <p className="text-forest/80 italic font-display">
                    &ldquo;Bwa Lontan signifie &apos;bois d&apos;autrefois&apos; en créole&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second part */}
          <div className="mt-32 max-w-3xl mx-auto reveal">
            <div className="space-y-6 text-lg text-forest/70 leading-relaxed">
              <p>
                Les résultats spectaculaires nous ont convaincus de partager cette approche
                avec d&apos;autres. Aujourd&apos;hui, Bwa Lontan accompagne agriculteurs, particuliers
                et collectivités dans la création d&apos;écosystèmes nourriciers productifs,
                résilients et régénératifs.
              </p>
              <p>
                Notre nom, qui signifie &quot;bois d&apos;autrefois&quot; en créole, reflète notre
                engagement à retrouver la richesse des forêts originelles tout en créant
                l&apos;agriculture de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6">
              Les fondateurs
            </span>
            <h2 className="text-forest-deep mb-4">Notre équipe</h2>
            <p className="text-lg text-forest/70">
              Une équipe complémentaire, alliant rigueur scientifique et approche sensible du vivant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="reveal card-organic p-8 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Avatar placeholder */}
                <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <span className="text-4xl font-display text-cream">{member.name[0]}</span>
                </div>

                <h3 className="text-2xl font-display text-forest-deep mb-2">{member.name}</h3>
                <p className={`text-sm font-accent bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                  {member.role}
                </p>
                <p className="text-forest/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <p className="text-forest/60 max-w-2xl mx-auto">
              Ensemble, nous formons une équipe complémentaire. Notre collaboration avec un réseau
              d&apos;experts locaux et internationaux nous permet d&apos;offrir un accompagnement complet
              et adapté à chaque projet.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-accent text-sm mb-6">
              Ce qui nous guide
            </span>
            <h2 className="text-forest-deep mb-4">Nos valeurs</h2>
            <p className="text-lg text-forest/70">
              Des principes qui guident chacune de nos actions et décisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="reveal text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${value.bgColor} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <svg className={`w-10 h-10 bg-gradient-to-br ${value.color} [&>path]:stroke-[url(#grad${index})]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-canopy)" />
                        <stop offset="100%" stopColor="var(--color-leaf)" />
                      </linearGradient>
                    </defs>
                    {value.icon}
                  </svg>
                </div>
                <h4 className="font-display text-xl text-forest-deep mb-2">{value.title}</h4>
                <p className="text-sm text-forest/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section section-dark relative overflow-hidden">
        <div className="texture-grain absolute inset-0" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center reveal-scale">
            <span className="inline-block px-4 py-1 rounded-full bg-cream/10 text-cream font-accent text-sm mb-6">
              Notre mission
            </span>
            <h2 className="text-cream mb-8">Notre engagement</h2>
            <p className="text-xl text-cream/80 mb-6 leading-relaxed">
              Nous nous engageons à accompagner la transition vers une agriculture
              régénérative à La Réunion et dans l&apos;océan Indien. Chaque projet est
              pour nous l&apos;occasion de prouver qu&apos;il est possible de produire en
              abondance tout en restaurant les écosystèmes.
            </p>
            <p className="text-lg text-gold-light leading-relaxed">
              Notre vision : voir fleurir des milliers de jardins-forêts sur notre île,
              créant un réseau d&apos;oasis de biodiversité et d&apos;abondance pour les générations
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-canopy/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center bg-gradient-to-br from-forest-deep to-forest rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-leaf/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <h2 className="text-cream mb-6">
                  Envie de faire connaissance ?
                </h2>
                <p className="text-xl text-cream/80 mb-10 max-w-2xl mx-auto">
                  Que vous ayez un projet concret ou simplement des questions sur l&apos;agriculture
                  syntropique, nous serons ravis d&apos;échanger avec vous.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn bg-cream text-forest-deep hover:bg-sand group"
                  >
                    <span>Nous contacter</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="btn btn-ghost"
                  >
                    Découvrir nos services
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
