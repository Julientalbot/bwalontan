export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Bwa Lontan</h3>
            <p className="text-green-100">
              Expert en agriculture syntropique pour des écosystèmes agricoles durables et productifs
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <p className="text-green-100">contact@bwalontan.re</p>
            <p className="text-green-100">+262 692 XX XX XX</p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/bwalontan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-100 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com/bwalontan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-100 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-100">
          <p>&copy; 2025 Bwa Lontan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}