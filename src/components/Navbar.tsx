import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gradient-to-r from-black to-red-950 shadow-[0_4px_30px_rgba(220,38,38,0.2)] py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-red-600 rounded-full blur-sm opacity-70"></div>
              <Dumbbell className="relative text-white z-10" size={28} />
            </div>
            <div className="ml-3 relative">
              <span className="text-white font-bold text-xl tracking-wider">
                POWER<span className="text-red-600">GYM</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="relative bg-black bg-opacity-40 backdrop-blur-sm rounded-full px-6 py-2 border border-red-900/30">
              <div className="flex space-x-1">
                <NavLink href="#home" isActive={activeLink === 'home'}>Home</NavLink>
                <NavLink href="#about" isActive={activeLink === 'about'}>About</NavLink>
                <NavLink href="#classes" isActive={activeLink === 'classes'}>Classes</NavLink>
                <NavLink href="#trainers" isActive={activeLink === 'trainers'}>Trainers</NavLink>
                <NavLink href="#pricing" isActive={activeLink === 'pricing'}>Pricing</NavLink>
                <NavLink href="#contact" isActive={activeLink === 'contact'}>Contact</NavLink>
              </div>
            </div>
          </div>

          {/* Join Now Button */}
          <div className="hidden md:block">
            <button type="button" className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white px-8 py-2.5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-red-600/30">
              <span className="relative z-10">Join Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative bg-red-900/30 p-2 rounded-md text-white focus:outline-none group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-800/30 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {isOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-black to-red-950/95 backdrop-blur-sm absolute top-full left-0 w-full border-t border-red-900/30 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col space-y-1 px-4 py-6">
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)} isActive={activeLink === 'home'}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)} isActive={activeLink === 'about'}>About</MobileNavLink>
              <MobileNavLink href="#classes" onClick={() => setIsOpen(false)} isActive={activeLink === 'classes'}>Classes</MobileNavLink>
              <MobileNavLink href="#trainers" onClick={() => setIsOpen(false)} isActive={activeLink === 'trainers'}>Trainers</MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)} isActive={activeLink === 'pricing'}>Pricing</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} isActive={activeLink === 'contact'}>Contact</MobileNavLink>
              <div className="pt-4 mt-2 border-t border-red-900/30">
                <button type="button" className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 w-full shadow-lg hover:shadow-red-600/30">
                  <span className="relative z-10 flex items-center justify-center">
                    Join Now
                    <ChevronDown size={16} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string, isActive: boolean, children: React.ReactNode }> = ({ href, isActive, children }) => {
  return (
    <a
      href={href}
      className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
        isActive
          ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-md'
          : 'text-gray-200 hover:text-white'
      }`}
    >
      <span className="relative z-10">{children}</span>
      {!isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-1/2 transition-all duration-300"></span>
      )}
    </a>
  );
};

const MobileNavLink: React.FC<{ href: string, onClick: () => void, isActive: boolean, children: React.ReactNode }> = ({ href, onClick, isActive, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-md flex items-center ${
        isActive
          ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-md'
          : 'text-gray-200 hover:text-white hover:bg-red-900/20'
      }`}
    >
      {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-red-500 rounded-r-full"></span>}
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Navbar;