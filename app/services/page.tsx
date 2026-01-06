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

// Icon components
function DesignIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function TeachIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

const services = [
  {
    id: 'conception',
    icon: DesignIcon,
    title: 'Conception de projets agroforestiers',
    subtitle: 'Design personnalisé',
    description: 'Nous concevons des systèmes agricoles sur mesure, adaptés à votre terrain, votre climat et vos objectifs. Notre approche intègre les principes de l\'agriculture syntropique pour créer des écosystèmes productifs et résilients.',
    color: 'from-canopy to-leaf',
    bgColor: 'bg-canopy/5',
    features: [
      { title: 'Analyse du site', desc: 'Étude du sol, du climat, de la topographie et des ressources disponibles' },
      { title: 'Design personnalisé', desc: 'Création d\'un plan détaillé avec choix des espèces et stratification' },
      { title: 'Calendrier d\'implantation', desc: 'Planification des étapes de mise en œuvre sur plusieurs saisons' },
      { title: 'Budget détaillé', desc: 'Estimation complète des coûts et retour sur investissement' },
    ],
    image: '/images/syntropic-agriculture-system.jpg',
  },
  {
    id: 'formation',
    icon: TeachIcon,
    title: 'Formation et accompagnement technique',
    subtitle: 'Transmission de savoirs',
    description: 'Nous transmettons les connaissances et compétences nécessaires pour que vous puissiez gérer votre système en autonomie. Nos formations allient théorie et pratique pour une compréhension profonde des processus naturels.',
    color: 'from-earth-warm to-terracotta',
    bgColor: 'bg-terracotta/5',
    features: [
      { title: 'Initiation à l\'agriculture syntropique', desc: 'Les principes fondamentaux et leur application pratique' },
      { title: 'Gestion de la succession écologique', desc: 'Comprendre et diriger l\'évolution du système' },
      { title: 'Multiplication végétale', desc: 'Techniques de bouturage, greffage et production de plants' },
      { title: 'Suivi personnalisé', desc: 'Accompagnement sur votre projet avec visites régulières' },
    ],
    image: '/images/hero-tropical-forest.jpg',
  },
  {
    id: 'realisation',
    icon: GlobeIcon,
    title: 'Réalisation et suivi de projets',
    subtitle: 'Service clé en main',
    description: 'Pour ceux qui souhaitent une mise en œuvre complète, nous proposons un service clé en main incluant l\'installation du système et son suivi sur plusieurs années pour garantir son succès.',
    color: 'from-forest to-canopy',
    bgColor: 'bg-forest/5',
    features: [
      { title: 'Préparation du terrain', desc: 'Amendement du sol et mise en place des infrastructures' },
      { title: 'Plantation', desc: 'Installation des différentes strates végétales selon le design' },
      { title: 'Gestion initiale', desc: 'Taille, paillage et gestion de la biomasse' },
      { title: 'Suivi saisonnier', desc: 'Visites régulières pour optimiser le développement du système' },
    ],
    image: '/images/syntropic-agriculture-system.jpg',
  },
]

const pricing = [
  {
    title: 'Conception',
    price: 'À partir de 500€',
    description: 'Pour un jardin familial',
    icon: DesignIcon,
    color: 'from-canopy to-leaf',
  },
  {
    title: 'Formation',
    price: 'À partir de 80€',
    description: 'Par personne / journée',
    icon: TeachIcon,
    color: 'from-earth-warm to-terracotta',
  },
  {
    title: 'Réalisation',
    price: 'Sur devis',
    description: 'Selon surface et complexité',
    icon: GlobeIcon,
    color: 'from-forest to-canopy',
  },
]

export default function Services() {
  const revealRef = useRevealOnScroll()

  return (
    <div ref={revealRef}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-sand" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-canopy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6 animate-fade-in-up">
              Notre expertise
            </span>
            <h1 className="text-forest-deep mb-6 animate-fade-in-up delay-100">
              Nos Services
            </h1>
            <p className="text-xl text-forest/80 leading-relaxed animate-fade-in-up delay-200">
              De la conception à l&apos;autonomie, nous vous accompagnons dans la création
              d&apos;écosystèmes agricoles productifs et régénératifs, adaptés au climat
              tropical de La Réunion.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section bg-cream">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} reveal-${index % 2 === 0 ? 'left' : 'right'}`}>
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-cream" />
                    </div>
                    <span className={`px-3 py-1 rounded-full ${service.bgColor} text-sm font-accent`}>
                      {service.subtitle}
                    </span>
                  </div>

                  <h2 className="text-forest-deep mb-6">{service.title}</h2>

                  <p className="text-lg text-forest/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 rounded-xl bg-cream-dark/50 hover:bg-sand/50 transition-colors"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                          <CheckIcon className="w-4 h-4 text-cream" />
                        </div>
                        <div>
                          <h4 className="font-display text-forest-deep mb-1">{feature.title}</h4>
                          <p className="text-sm text-forest/60">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} reveal-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="relative">
                    {/* Decorative frames */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-20 rounded-[2rem] ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`} />
                    <div className="absolute -inset-4 bg-gradient-to-tr from-gold/10 to-transparent rounded-[2rem]" />

                    {/* Image container */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                    </div>

                    {/* Floating element */}
                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} bg-cream rounded-2xl p-4 shadow-xl border border-sand`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-cream" />
                        </div>
                        <div>
                          <p className="font-accent font-medium text-forest-deep">Service #{index + 1}</p>
                          <p className="text-sm text-forest/60">{service.subtitle}</p>
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

      {/* Pricing Section */}
      <section className="section bg-cream-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-canopy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-accent text-sm mb-6">
              Tarifs indicatifs
            </span>
            <h2 className="text-forest-deep mb-4">
              Investir dans un écosystème productif
            </h2>
            <p className="text-lg text-forest/70">
              Chaque projet est unique et nos tarifs s&apos;adaptent à vos besoins spécifiques.
              Voici quelques indications pour vous aider à planifier votre investissement.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="reveal card-organic p-8 text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon className="w-8 h-8 text-cream" />
                </div>
                <h3 className="text-xl font-display text-forest-deep mb-2">{item.title}</h3>
                <p className={`text-3xl font-display bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.price}
                </p>
                <p className="text-sm text-forest/60">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center reveal">
            <Link
              href="/contact"
              className="btn btn-primary group"
            >
              <span>Demander un devis personnalisé</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6">
              Notre méthode
            </span>
            <h2 className="text-forest-deep mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-forest/70">
              Un processus simple et transparent pour transformer votre terrain
              en écosystème nourricier.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Premier contact', desc: 'Échangeons sur votre projet et vos objectifs' },
              { step: '02', title: 'Visite du site', desc: 'Analyse de votre terrain et de son potentiel' },
              { step: '03', title: 'Proposition', desc: 'Design personnalisé et devis détaillé' },
              { step: '04', title: 'Réalisation', desc: 'Mise en œuvre et accompagnement' },
            ].map((item, index) => (
              <div
                key={index}
                className="reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <span className="text-7xl font-display text-sand">{item.step}</span>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-sand to-transparent -translate-y-1/2" />
                  )}
                </div>
                <h4 className="font-display text-forest-deep mb-2">{item.title}</h4>
                <p className="text-sm text-forest/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark relative overflow-hidden">
        <div className="texture-grain absolute inset-0" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center reveal-scale">
            <h2 className="text-cream mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-cream/80 mb-10">
              Contactez-nous pour une première discussion gratuite et sans engagement.
              Nous serons ravis de répondre à toutes vos questions.
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
                href="/realisations"
                className="btn btn-ghost"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
