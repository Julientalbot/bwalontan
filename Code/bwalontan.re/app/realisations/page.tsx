import Link from 'next/link';

export default function Realisations() {
  const projets = [
    {
      id: 1,
      titre: "Jardin-forêt familial à Saint-Pierre",
      surface: "1000 m²",
      date: "2023",
      description: "Transformation d'un terrain en friche en écosystème productif avec plus de 50 espèces comestibles",
      resultats: ["30% d'augmentation de la matière organique du sol", "Production diversifiée toute l'année", "Autonomie en fruits pour une famille de 4 personnes"],
      testimonial: "Grâce à Bwa Lontan, notre jardin est devenu un véritable paradis nourricier. Les enfants adorent y passer du temps !",
      client: "Famille Martin"
    },
    {
      id: 2,
      titre: "Système agroforestier à Sainte-Rose",
      surface: "2 hectares",
      date: "2022",
      description: "Conception d'un système syntropique intégrant cultures vivrières et arbres fruitiers tropicaux",
      resultats: ["Réduction de 80% des intrants", "Augmentation de la biodiversité", "Revenus diversifiés sur 5 productions"],
      testimonial: "L'approche syntropique a révolutionné ma façon de cultiver. Mon exploitation est plus résiliente et productive.",
      client: "Jean-Paul, agriculteur"
    },
    {
      id: 3,
      titre: "Jardin pédagogique à Saint-Denis",
      surface: "500 m²",
      date: "2023",
      description: "Création d'un espace d'apprentissage pour sensibiliser les jeunes à l'agriculture durable",
      resultats: ["200 élèves formés", "15 variétés endémiques plantées", "Compost pédagogique installé"],
      testimonial: "Un projet inspirant qui permet aux enfants de reconnecter avec la nature et comprendre d'où vient leur nourriture.",
      client: "École Les Tamarins"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-green-900 mb-6">Nos Réalisations</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Découvrez comment nous transformons des terrains ordinaires en 
            écosystèmes nourriciers extraordinaires.
          </p>
        </div>
      </section>

      {/* Projets réalisés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projets.map((projet, index) => (
              <div key={projet.id} className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                    <h2 className="text-3xl font-serif text-green-900 mb-4">{projet.titre}</h2>
                    <div className="flex gap-4 mb-6 text-sm">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {projet.surface}
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                        {projet.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{projet.description}</p>
                    
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Résultats obtenus :</h3>
                    <ul className="space-y-2 mb-8">
                      {projet.resultats.map((resultat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{resultat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 italic mb-3">&quot;{projet.testimonial}&quot;</p>
                      <p className="text-green-800 font-medium">— {projet.client}</p>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''} grid grid-cols-2 gap-4`}>
                    <div className="bg-gradient-to-br from-green-200 to-emerald-300 h-48 rounded-lg"></div>
                    <div className="bg-gradient-to-br from-emerald-200 to-teal-300 h-48 rounded-lg"></div>
                    <div className="bg-gradient-to-br from-teal-200 to-cyan-300 h-48 rounded-lg col-span-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques globales */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Notre impact en chiffres</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-green-200">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15 ha</div>
              <p className="text-green-200">Transformés</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-green-200">Espèces plantées</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-green-200">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de projets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-green-900 text-center mb-12">
            Nous intervenons sur tous types de projets
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif text-green-900 mb-4">Jardins familiaux</h3>
              <p className="text-gray-600 mb-4">
                Transformation de jardins privés en écosystèmes nourriciers pour 
                l&apos;autonomie alimentaire familiale.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• De 200 m² à 5000 m²</li>
                <li>• Design personnalisé</li>
                <li>• Formation incluse</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif text-green-900 mb-4">Exploitations agricoles</h3>
              <p className="text-gray-600 mb-4">
                Conversion de terres agricoles vers des systèmes syntropiques 
                productifs et régénératifs.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• De 1 à 50 hectares</li>
                <li>• Transition progressive</li>
                <li>• Suivi sur 3 ans</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif text-green-900 mb-4">Espaces collectifs</h3>
              <p className="text-gray-600 mb-4">
                Création de jardins partagés, espaces pédagogiques et forêts 
                comestibles communautaires.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Écoles et associations</li>
                <li>• Collectivités</li>
                <li>• Animation d&apos;ateliers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-green-900 mb-6">
            Votre projet pourrait être le prochain !
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez le mouvement de l&apos;agriculture régénérative et créez 
            votre propre oasis d&apos;abondance.
          </p>
          <Link href="/contact" className="inline-block bg-green-800 text-white px-8 py-4 rounded-lg hover:bg-green-900 transition-colors duration-200">
            Démarrer mon projet
          </Link>
        </div>
      </section>
    </>
  );
}