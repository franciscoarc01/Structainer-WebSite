import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => {
    return location.pathname === path;
  };



  const navLinks = [
    { path: '/', label: 'INICIO' },
    { path: '/nosotros', label: 'NOSOTROS' },
    { path: '/divisiones', label: 'DIVISIONES' },
    { path: '/servicios', label: 'SERVICIOS' },
    { path: '/proyectos', label: 'PROYECTOS' },
    { path: '/productos', label: 'PRODUCTOS' },
    { path: '/contacto', label: 'CONTACTO' },
  ];



  // Control scroll behavior for top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* TOP BAR - Contact Information */}
      <div
        className={`transition-all duration-300 border-b ${
          showTopBar ? 'h-10 opacity-100' : 'h-0 opacity-0 overflow-hidden'
        }`}
        style={{
          backgroundColor: '#04254D',
          borderBottomColor: 'rgba(200, 162, 86, 0.3)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-center h-full text-xs sm:text-sm text-white">
            {/* Contact info in order - Centered */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {/* 1. Phone - Always visible */}
              <a
                href="tel:4427220385"
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: '#C8A256' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D4B470'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#C8A256'}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">442 722 0385</span>
              </a>

              {/* 2. WhatsApp - Always visible */}
              <a
                href="https://wa.me/524427220385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: '#C8A256' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D4B470'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#C8A256'}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* 3. Location - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-1.5 text-gray-300">
                <MapPin className="w-3.5 h-3.5" style={{ color: '#C8A256' }} />
                <span>Terra Business Park · Nave 29 C</span>
              </div>

              {/* 4. Email - Hidden on mobile and tablet */}
              <a
                href="mailto:ventas@structainer.net"
                className="hidden lg:flex items-center gap-1.5 transition-colors"
                style={{ color: '#C8A256' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D4B470'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#C8A256'}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ventas@structainer.net</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER - Centered Menu with CTA */}
      <header className="bg-white sticky top-0 z-50 shadow-sm" style={{ borderBottom: '2px solid #C8A256' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-18 md:h-20">
            {/* Left Column - Logo */}
            <div className="flex justify-start">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="Structainer V"
                  className="h-12 md:h-16 w-auto"
                />
              </Link>
            </div>

            {/* Center Column - Desktop Navigation (Perfectly Centered) */}
            <nav className="hidden lg:flex justify-center">
              <div className="flex gap-4 xl:gap-6">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`transition-all text-sm xl:text-base whitespace-nowrap font-semibold relative py-1`}
                    style={{
                      color: isActive(path) ? '#04254D' : '#5A5A5A'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#04254D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = isActive(path) ? '#04254D' : '#5A5A5A'}
                  >
                    {label}
                    {/* Underline - only on active or hover */}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform`}
                      style={{
                        backgroundColor: '#C8A256',
                        transform: isActive(path) ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                    />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Column - Empty (mirror space for perfect centering) */}
            <div className="hidden lg:block" />

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end col-span-2">
              <button
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: '#04254D',
                  backgroundColor: mobileMenuOpen ? '#F0F0F0' : 'transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = mobileMenuOpen ? '#F0F0F0' : 'transparent'}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 pt-2 border-t mt-2 animate-slideDown" style={{ borderTopColor: '#C8A256' }}>
              {/* Contact info in mobile menu */}
              <div className="mb-4 pb-4 border-b space-y-2" style={{ borderBottomColor: '#F0F0F0' }}>
                <a
                  href="tel:4427220385"
                  className="flex items-center gap-2 py-2 px-4 transition-colors"
                  style={{ color: '#04254D' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C8A256'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#04254D'}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">442 722 0385</span>
                </a>
                <a
                  href="https://wa.me/524427220385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 transition-colors"
                  style={{ color: '#04254D' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C8A256'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#04254D'}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>

              {/* Navigation links */}
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all text-base ${
                    isActive(path) ? 'font-semibold border-l-4' : 'font-medium'
                  }`}
                  style={{
                    backgroundColor: isActive(path) ? '#F0F0F0' : 'transparent',
                    color: isActive(path) ? '#04254D' : '#5A5A5A',
                    borderLeftColor: isActive(path) ? '#C8A256' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F0F0F0';
                    e.currentTarget.style.color = '#04254D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isActive(path) ? '#F0F0F0' : 'transparent';
                    e.currentTarget.style.color = isActive(path) ? '#04254D' : '#5A5A5A';
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}