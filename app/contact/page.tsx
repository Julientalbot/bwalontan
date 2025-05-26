'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeProjet: '',
    surface: '',
    localisation: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          message: `
Téléphone: ${formData.telephone}
Type de projet: ${formData.typeProjet}
Surface: ${formData.surface}
Localisation: ${formData.localisation}

${formData.message}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Réinitialiser le formulaire
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          typeProjet: '',
          surface: '',
          localisation: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-green-900 mb-6">Contact</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            Prêt à transformer votre terrain en écosystème nourricier ? 
            Contactez-nous pour discuter de votre projet.
          </p>
        </div>
      </section>

      {/* Formulaire et informations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <div>
              <h2 className="text-3xl font-serif text-green-900 mb-8">
                Parlez-nous de votre projet
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="typeProjet" className="block text-gray-700 font-medium mb-2">
                    Type de projet
                  </label>
                  <select
                    id="typeProjet"
                    name="typeProjet"
                    value={formData.typeProjet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="jardin-familial">Jardin familial</option>
                    <option value="exploitation-agricole">Exploitation agricole</option>
                    <option value="espace-collectif">Espace collectif</option>
                    <option value="formation">Formation uniquement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="surface" className="block text-gray-700 font-medium mb-2">
                      Surface approximative
                    </label>
                    <input
                      type="text"
                      id="surface"
                      name="surface"
                      value={formData.surface}
                      onChange={handleChange}
                      placeholder="Ex: 1000 m², 2 hectares"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="localisation" className="block text-gray-700 font-medium mb-2">
                      Localisation
                    </label>
                    <input
                      type="text"
                      id="localisation"
                      name="localisation"
                      value={formData.localisation}
                      onChange={handleChange}
                      placeholder="Ex: Saint-Pierre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de votre vision, vos objectifs, vos contraintes..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                    Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
                    Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par email.
                  </div>
                )}
              </form>
            </div>
            
            {/* Informations de contact */}
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-serif text-green-900 mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-green-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">contact@bwalontan.re</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-green-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Téléphone</p>
                      <p className="text-gray-600">+262 692 XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-green-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Zone d&apos;intervention</p>
                      <p className="text-gray-600">Toute l&apos;île de La Réunion</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-green-200 p-8 rounded-xl">
                <h3 className="text-xl font-serif text-green-900 mb-4">
                  Horaires de disponibilité
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Lundi - Vendredi :</span> 8h00 - 18h00</p>
                  <p><span className="font-medium">Samedi :</span> 8h00 - 12h00</p>
                  <p><span className="font-medium">Dimanche :</span> Fermé</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Nous répondons généralement sous 48h ouvrées
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-serif text-green-900 mb-4">
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-green-900 text-center mb-12">
            Questions fréquentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">
                Quelles sont vos zones d'intervention ?
              </h3>
              <p className="text-gray-600">
                Nous intervenons sur toute l&apos;île de La Réunion, de la côte aux hauts, 
                en adaptant nos designs aux spécificités de chaque microclimat.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">
                Combien de temps faut-il pour voir les premiers résultats ?
              </h3>
              <p className="text-gray-600">
                Les premières récoltes arrivent dès 3-6 mois. Le système atteint sa 
                pleine productivité après 2-3 ans et continue de s&apos;améliorer avec le temps.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">
                Proposez-vous des formations sans projet de réalisation ?
              </h3>
              <p className="text-gray-600">
                Oui, nous organisons régulièrement des formations ouvertes à tous, 
                ainsi que des formations sur mesure pour les groupes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">
                Quel est le coût moyen d'un projet ?
              </h3>
              <p className="text-gray-600">
                Les coûts varient selon la taille et la complexité du projet. 
                La conception démarre à 500€ pour un jardin familial. Contactez-nous 
                pour un devis personnalisé gratuit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}