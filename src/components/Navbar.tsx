import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Dumbbell className="text-red-600 mr-2" size={28} />
            <span className="text-white font-bold text-xl">POWER<span className="text-red-600">GYM</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#classes">Classes</NavLink>
            <NavLink href="#trainers">Trainers</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          
          {/* Join Now Button */}
          <div className="hidden md:block">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
              Join Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#classes" onClick={() => setIsOpen(false)}>Classes</MobileNavLink>
              <MobileNavLink href="#trainers" onClick={() => setIsOpen(false)}>Trainers</MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 w-full">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-red-500 transition duration-300 font-medium"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{ href: string, onClick: () => void, children: React.ReactNode }> = ({ href, onClick, children }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-white hover:text-red-500 transition duration-300 text-lg font-medium py-2 border-b border-gray-800"
    >
      {children}
    </a>
  );
};

export default Navbar;