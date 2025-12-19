import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Vart Reser Ni?</p>
            <p className="text-gray-400">Upptäck din nästa destination</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/articles" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Guider
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Om oss
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Integritetspolicy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Användarvillkor
            </Link>
            <a 
              href="mailto:vartreserni@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Kontakta oss
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vart Reser Ni? Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;