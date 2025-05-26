import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-green-900 mb-6">
              Bwa Lontan
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 leading-relaxed">
              Cultivons ensemble des écosystèmes nourriciers,
              <br />inspirés de la forêt tropicale réunionnaise
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              Spécialistes en agriculture syntropique et agroécologie à La Réunion, 
              nous concevons des jardins-forêts productifs et résilients qui régénèrent 
              les sols et nourrissent les communautés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" variant="primary">
                Découvrir nos services
              </Button>
              <Button href="/contact" variant="outline">
                Démarrer votre projet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction à l&apos;agriculture syntropique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-green-900 mb-6">
                L&apos;agriculture syntropique : une révolution verte
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                L&apos;agriculture syntropique s&apos;inspire du fonctionnement des forêts tropicales 
                pour créer des systèmes agricoles productifs et auto-suffisants. En mimant 
                les processus naturels de succession écologique, nous créons des écosystèmes 
                qui s&apos;enrichissent avec le temps.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cette approche révolutionnaire permet de produire une grande diversité 
                d&apos;aliments tout en régénérant les sols, séquestrant du carbone et 
                créant de la biodiversité.
              </p>
              <Link href="/approche" className="text-green-800 font-medium hover:text-green-900 inline-flex items-center gap-2">
                En savoir plus sur notre approche
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-green-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De la conception à la réalisation, nous vous accompagnons dans la création 
              d&apos;écosystèmes agricoles durables et productifs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-green-900 mb-4">Conception de projets</h3>
              <p className="text-gray-600 mb-4">
                Design personnalisé de jardins-forêts et systèmes agroforestiers adaptés 
                à votre terrain et vos objectifs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Analyse du site et du sol</li>
                <li>• Plan de plantation détaillé</li>
                <li>• Calendrier de mise en œuvre</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-green-900 mb-4">Formation & Accompagnement</h3>
              <p className="text-gray-600 mb-4">
                Transmissions de savoirs et accompagnement technique pour autonomiser 
                votre pratique de l&apos;agriculture syntropique.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Ateliers pratiques</li>
                <li>• Suivi personnalisé</li>
                <li>• Formation continue</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-green-900 mb-4">Réalisation & Suivi</h3>
              <p className="text-gray-600 mb-4">
                Mise en œuvre complète de votre projet avec suivi sur plusieurs saisons 
                pour assurer son succès.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Installation du système</li>
                <li>• Gestion de la succession</li>
                <li>• Optimisation continue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Bwa Lontan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-green-900 text-center mb-12">
              Pourquoi choisir Bwa Lontan ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Expertise locale</h3>
                  <p className="text-gray-600">
                    Connaissance approfondie des écosystèmes réunionnais et des espèces 
                    adaptées au climat tropical.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Approche holistique</h3>
                  <p className="text-gray-600">
                    Vision globale intégrant production alimentaire, régénération des sols 
                    et biodiversité.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Résultats durables</h3>
                  <p className="text-gray-600">
                    Systèmes conçus pour s&apos;améliorer avec le temps, créant une abondance 
                    croissante année après année.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Accompagnement personnalisé</h3>
                  <p className="text-gray-600">
                    Suivi adapté à vos besoins, de la conception à l&apos;autonomie complète 
                    dans la gestion de votre système.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage ou Citation */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl font-serif mb-8 leading-relaxed">
              La nature ne connaît pas de problèmes, seulement des solutions. 
              En travaillant avec elle plutôt que contre elle, nous créons 
              l&apos;abondance dont nous avons besoin.
            </p>
            <p className="text-green-200">— Ernst Götsch, père de l&apos;agriculture syntropique</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-green-900 mb-6">
              Prêt à transformer votre terrain en écosystème nourricier ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment 
              l&apos;agriculture syntropique peut révolutionner votre approche du jardinage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-green-800 text-white px-8 py-4 rounded-lg hover:bg-green-900 transition-colors duration-200">
                Demander un devis gratuit
              </Link>
              <Link href="/realisations" className="inline-block border-2 border-green-800 text-green-800 px-8 py-4 rounded-lg hover:bg-green-800 hover:text-white transition-all duration-200">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}