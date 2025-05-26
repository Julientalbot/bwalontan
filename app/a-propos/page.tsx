export default function APropos() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-green-900 mb-6">À Propos</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            L&apos;histoire de Bwa Lontan, c&apos;est l&apos;histoire d&apos;une passion pour 
            la terre et d&apos;une vision pour l&apos;agriculture de demain.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-green-900 mb-8">Notre histoire</h2>
            
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Bwa Lontan est né de la rencontre entre Amandine et Arnaud, deux passionnés 
                d&apos;agroécologie unis par une vision commune : transformer l&apos;agriculture à 
                La Réunion en s&apos;inspirant de la sagesse de la nature tropicale.
              </p>
              
              <p className="mb-6">
                Après des années d&apos;expérience dans le développement rural et la gestion de 
                projets agricoles, nous avons découvert l&apos;agriculture syntropique lors d&apos;un 
                voyage au Brésil. Cette approche révolutionnaire nous a ouvert les yeux sur 
                le potentiel immense de travailler avec la nature plutôt que contre elle.
              </p>
              
              <p className="mb-6">
                De retour à La Réunion, nous avons commencé à expérimenter ces principes 
                sur notre propre terrain, adaptant les techniques au contexte insulaire 
                tropical unique de l&apos;île. Les résultats spectaculaires nous ont convaincus 
                de partager cette approche avec d&apos;autres.
              </p>
              
              <p>
                Aujourd&apos;hui, Bwa Lontan accompagne agriculteurs, particuliers et collectivités 
                dans la création d&apos;écosystèmes nourriciers productifs, résilients et 
                régénératifs. Notre nom, qui signifie &quot;bois d&apos;autrefois&quot; en créole, 
                reflète notre engagement à retrouver la richesse des forêts originelles 
                tout en créant l&apos;agriculture de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-green-900 text-center mb-12">Notre équipe</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-serif text-green-900 mb-2">Amandine</h3>
              <p className="text-green-700 font-medium mb-4">Co-fondatrice & Experte en design syntropique</p>
              <p className="text-gray-600">
                Ingénieure agronome de formation, Amandine apporte son expertise en 
                conception de systèmes agroforestiers et sa connaissance approfondie 
                de la flore tropicale. Passionnée par les interactions plantes-sol, 
                elle excelle dans la création de designs productifs et harmonieux.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-serif text-green-900 mb-2">Arnaud</h3>
              <p className="text-green-700 font-medium mb-4">Co-fondateur & Spécialiste en gestion écologique</p>
              <p className="text-gray-600">
                Fort d&apos;une expérience en développement rural et gestion de projets, 
                Arnaud se spécialise dans la mise en œuvre pratique et le suivi des 
                systèmes syntropiques. Sa vision holistique permet d&apos;intégrer les 
                dimensions sociales et économiques dans chaque projet.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ensemble, nous formons une équipe complémentaire, alliant rigueur scientifique 
              et approche sensible du vivant. Notre collaboration avec un réseau d&apos;experts 
              locaux et internationaux nous permet d&apos;offrir un accompagnement complet et adapté 
              à chaque projet.
            </p>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-green-900 text-center mb-12">Nos valeurs</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Régénération</h3>
              <p className="text-gray-600 text-sm">
                Restaurer la vie et la fertilité des sols pour les générations futures
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Travailler ensemble pour créer des synergies positives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Transmission</h3>
              <p className="text-gray-600 text-sm">
                Partager les savoirs pour multiplier l&apos;impact positif
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Résilience</h3>
              <p className="text-gray-600 text-sm">
                Créer des systèmes capables de s&apos;adapter et de prospérer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8">Notre engagement</h2>
            <p className="text-xl mb-6 text-green-100">
              Nous nous engageons à accompagner la transition vers une agriculture 
              régénérative à La Réunion et dans l&apos;océan Indien. Chaque projet est 
              pour nous l&apos;occasion de prouver qu&apos;il est possible de produire en 
              abondance tout en restaurant les écosystèmes.
            </p>
            <p className="text-lg text-green-200">
              Notre vision : voir fleurir des milliers de jardins-forêts sur notre île, 
              créant un réseau d&apos;oasis de biodiversité et d&apos;abondance pour les générations 
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Partenaires et certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-green-900 text-center mb-12">
            Nos partenaires et réseaux
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Nous collaborons avec un réseau d&apos;acteurs engagés dans la transition 
              agroécologique à La Réunion et au-delà :
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Partenaire 1</span>
              </div>
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Partenaire 2</span>
              </div>
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Partenaire 3</span>
              </div>
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Partenaire 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}