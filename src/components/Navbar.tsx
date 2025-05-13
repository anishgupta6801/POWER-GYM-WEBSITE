import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ChevronDown, User, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';

// Membership Form Modal Component
interface MembershipFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MembershipForm: React.FC<MembershipFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    plan: 'basic',
    message: ''
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      dob: '',
      plan: 'basic',
      message: ''
    });
    setStep(1);
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close membership form"
          title="Close"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Join <span className="text-red-600">POWERGYM</span>
                </h2>
                <p className="text-gray-300">
                  {step === 1 ? 'Fill in your details to get started' : 'Choose your membership plan'}
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-red-600' : 'bg-gray-700'}`}>
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className={`w-12 h-1 ${step >= 2 ? 'bg-red-600' : 'bg-gray-700'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-red-600' : 'bg-gray-700'}`}>
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center">
                        <User size={16} className="mr-2 text-red-500" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center">
                        <Mail size={16} className="mr-2 text-red-500" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2 flex items-center">
                        <Phone size={16} className="mr-2 text-red-500" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-gray-300 mb-2 flex items-center">
                        <Calendar size={16} className="mr-2 text-red-500" />
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="plan" className="block text-gray-300 mb-2">
                        Select Membership Plan
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                      >
                        <option value="basic">Basic Plan - $29.99/month</option>
                        <option value="premium">Premium Plan - $49.99/month</option>
                        <option value="elite">Elite Plan - $79.99/month</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                        placeholder="Tell us about your fitness goals or any questions you have..."
                      ></textarea>
                    </div>
                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
                  <CheckCircle size={32} className="text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Thank You for Joining!
              </h2>
              <p className="text-gray-300 mb-8">
                Your membership application has been received. We'll contact you shortly to confirm your details and get you started on your fitness journey.
              </p>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [showMembershipForm, setShowMembershipForm] = useState(false);

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
            <button
              type="button"
              onClick={() => setShowMembershipForm(true)}
              className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white px-8 py-2.5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-red-600/30"
            >
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
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMembershipForm(true);
                  }}
                  className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 w-full shadow-lg hover:shadow-red-600/30"
                >
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

      {/* Membership Form Modal */}
      <MembershipForm
        isOpen={showMembershipForm}
        onClose={() => setShowMembershipForm(false)}
      />
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