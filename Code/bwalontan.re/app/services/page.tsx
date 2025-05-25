import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-green-900 mb-6">Nos Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            De la conception à l&apos;autonomie, nous vous accompagnons dans la création 
            d&apos;écosystèmes agricoles productifs et régénératifs.
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Conception de projets */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-green-900 mb-6">
                  Conception de projets agroforestiers
                </h2>
                <p className="text-gray-600 mb-6">
                  Nous concevons des systèmes agricoles sur mesure, adaptés à votre terrain, 
                  votre climat et vos objectifs. Notre approche intègre les principes de 
                  l&apos;agriculture syntropique pour créer des écosystèmes productifs et résilients.
                </p>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Notre processus :</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Analyse du site :</strong> Étude du sol, du climat, de la topographie et des ressources disponibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Design personnalisé :</strong> Création d&apos;un plan détaillé avec choix des espèces et stratification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Calendrier d&apos;implantation :</strong> Planification des étapes de mise en œuvre sur plusieurs saisons</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Budget détaillé :</strong> Estimation complète des coûts et retour sur investissement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-96 rounded-lg"></div>
            </div>
          </div>

          {/* Formation et accompagnement */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-emerald-100 to-teal-100 h-96 rounded-lg"></div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-serif text-green-900 mb-6">
                  Formation et accompagnement technique
                </h2>
                <p className="text-gray-600 mb-6">
                  Nous transmettons les connaissances et compétences nécessaires pour que vous 
                  puissiez gérer votre système en autonomie. Nos formations allient théorie et 
                  pratique pour une compréhension profonde des processus naturels.
                </p>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Nos formations :</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Initiation à l&apos;agriculture syntropique :</strong> Les principes fondamentaux et leur application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Gestion de la succession écologique :</strong> Comprendre et diriger l&apos;évolution du système</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Multiplication végétale :</strong> Techniques de bouturage, greffage et production de plants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Suivi personnalisé :</strong> Accompagnement sur votre projet avec visites régulières</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Réalisation et suivi */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-green-900 mb-6">
                  Réalisation et suivi de projets
                </h2>
                <p className="text-gray-600 mb-6">
                  Pour ceux qui souhaitent une mise en œuvre complète, nous proposons un service 
                  clé en main incluant l&apos;installation du système et son suivi sur plusieurs années 
                  pour garantir son succès.
                </p>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Ce service comprend :</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Préparation du terrain :</strong> Amendement du sol et mise en place des infrastructures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Plantation :</strong> Installation des différentes strates végétales selon le design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Gestion initiale :</strong> Taille, paillage et gestion de la biomasse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Suivi saisonnier :</strong> Visites régulières pour optimiser le développement du système</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-green-100 h-96 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs indicatifs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-green-900 text-center mb-12">
            Investir dans un écosystème productif
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center mb-8">
              Chaque projet est unique et nos tarifs s&apos;adaptent à vos besoins spécifiques. 
              Voici quelques indications pour vous aider à planifier votre investissement :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-green-800 mb-3">Conception</h3>
                <p className="text-gray-600 text-sm">À partir de 500€ pour un jardin familial</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-green-800 mb-3">Formation</h3>
                <p className="text-gray-600 text-sm">Journées à partir de 80€/personne</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-green-800 mb-3">Réalisation</h3>
                <p className="text-gray-600 text-sm">Sur devis selon la surface et la complexité</p>
              </div>
            </div>
            <p className="text-center mt-8">
              <Link href="/contact" className="inline-block bg-green-800 text-white px-8 py-4 rounded-lg hover:bg-green-900 transition-colors duration-200">
                Demander un devis personnalisé
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}