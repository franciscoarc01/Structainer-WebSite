import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/609e0594c6db439163d815ac5d9383dac9bd059f.png';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Structainer V Group" className="h-16" />
          </Link>
          
          <nav className="flex gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Nosotros
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive('/services') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Servicios
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
