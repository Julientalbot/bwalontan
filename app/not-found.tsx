import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-playfair text-green-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez semble s&apos;être perdue dans la forêt...
        </p>
        <Button href="/" variant="primary">
          Retour à l'accueil
        </Button>
      </div>
    </div>
  )
}