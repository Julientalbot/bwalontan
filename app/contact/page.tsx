'use client'

import { useState, useEffect, useRef } from 'react'

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

const contactInfo = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    label: 'Email',
    value: 'contact@bwalontan.re',
    href: 'mailto:contact@bwalontan.re',
    color: 'from-canopy to-leaf',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    label: 'Téléphone',
    value: '+262 692 XX XX XX',
    href: 'tel:+262692000000',
    color: 'from-earth-warm to-terracotta',
  },
  {
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    label: 'Zone d\'intervention',
    value: 'Toute l\'île de La Réunion',
    href: null,
    color: 'from-gold to-gold-light',
  },
]

export default function Contact() {
  const revealRef = useRevealOnScroll()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', projectType: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Parlons de votre projet
            </span>
            <h1 className="text-forest-deep mb-6 animate-fade-in-up delay-100">
              Contact
            </h1>
            <p className="text-xl text-forest/80 leading-relaxed animate-fade-in-up delay-200">
              Vous avez un projet de jardin-forêt, une question sur l&apos;agriculture
              syntropique, ou vous souhaitez simplement échanger ? Contactez-nous !
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3 reveal-left">
              <div className="card-organic p-8 md:p-10">
                <h2 className="text-2xl font-display text-forest-deep mb-2">Envoyez-nous un message</h2>
                <p className="text-forest/60 mb-8">
                  Nous vous répondrons dans les plus brefs délais.
                </p>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 bg-canopy/10 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-canopy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display text-forest-deep mb-2">Message envoyé !</h3>
                    <p className="text-forest/60 mb-6">
                      Merci pour votre message. Nous vous répondrons très bientôt.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="btn btn-primary"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Nom complet <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Project Type row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="0692 XX XX XX"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="form-label">
                          Type de projet
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="jardin-particulier">Jardin particulier</option>
                          <option value="exploitation-agricole">Exploitation agricole</option>
                          <option value="collectivite">Collectivité / École</option>
                          <option value="formation">Formation / Atelier</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="form-label">
                        Sujet <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Objet de votre message"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-terracotta">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="form-input resize-none"
                        placeholder="Décrivez votre projet ou posez vos questions..."
                      />
                    </div>

                    {/* Error message */}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-terracotta/10 border border-terracotta/20 rounded-xl text-terracotta text-sm">
                        Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 reveal-right">
              <div className="space-y-6">
                {/* Contact cards */}
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="card-organic p-6 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                          <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {info.icon}
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-forest/50 font-accent mb-1">{info.label}</p>
                          <p className="text-lg text-forest-deep font-medium group-hover:text-canopy transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {info.icon}
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-forest/50 font-accent mb-1">{info.label}</p>
                          <p className="text-lg text-forest-deep font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Schedule info */}
                <div className="card-organic p-6 bg-gradient-to-br from-forest-deep to-forest text-cream">
                  <h3 className="font-display text-xl mb-4">Prenons rendez-vous</h3>
                  <p className="text-cream/80 mb-4">
                    Une visite de votre terrain est souvent la meilleure façon de commencer.
                    Nous nous déplaçons sur toute l&apos;île.
                  </p>
                  <div className="flex items-center gap-2 text-gold-light">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-accent">Première visite gratuite et sans engagement</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="card-organic p-6">
                  <h3 className="font-display text-lg text-forest-deep mb-4">Suivez-nous</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/bwalontan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-sand rounded-xl flex items-center justify-center hover:bg-canopy hover:text-cream transition-all group"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-forest group-hover:text-cream transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/bwalontan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-sand rounded-xl flex items-center justify-center hover:bg-canopy hover:text-cream transition-all group"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-forest group-hover:text-cream transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-canopy/10 text-canopy font-accent text-sm mb-6">
              Questions fréquentes
            </span>
            <h2 className="text-forest-deep mb-4">Vous vous demandez peut-être...</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Combien coûte une conception de jardin-forêt ?',
                a: 'Le tarif dépend de la surface et de la complexité du projet. Pour un jardin familial, comptez à partir de 500€. Nous établissons systématiquement un devis personnalisé gratuit après une première visite.',
              },
              {
                q: 'Intervenez-vous sur toute l\'île ?',
                a: 'Oui, nous intervenons sur toute La Réunion, du littoral aux hauts, en adaptant nos recommandations au microlimat de chaque zone.',
              },
              {
                q: 'Combien de temps faut-il pour créer un système productif ?',
                a: 'Les premiers légumes et fruits peuvent être récoltés dès la première année. Le système atteint sa maturité entre 5 et 10 ans, avec une production croissante au fil du temps.',
              },
              {
                q: 'Proposez-vous des formations pour débutants ?',
                a: 'Absolument ! Nos formations s\'adressent à tous les niveaux, du jardinier amateur au professionnel souhaitant se reconvertir.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="reveal card-organic p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-display text-forest-deep mb-2">{faq.q}</h4>
                <p className="text-forest/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
