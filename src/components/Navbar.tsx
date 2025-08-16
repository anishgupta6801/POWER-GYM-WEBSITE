import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';

// Free Trial Form Modal Component
interface FreeTrialFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialForm: React.FC<FreeTrialFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    timeSlot: '',
    interests: [] as string[],
    emergencyContact: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Free Trial booking:', formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      startDate: '',
      timeSlot: '',
      interests: [],
      emergencyContact: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden border border-gray-700/50">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close free trial form"
          title="Close"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              {/* Compact Header */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-white mb-1">
                  BOOK YOUR <span className="text-red-600">2-DAY FREE TRIAL</span>
                </h2>
                <p className="text-gray-300 text-sm">
                  Experience PowerGym with full access - No commitment required!
                </p>
              </div>

              {/* Rectangle Form Container with Curved Edges */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/40 p-6 shadow-xl">
                <form onSubmit={handleSubmit}>
                  {/* 4x2 Compact Grid Layout */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {/* Row 1 */}
                    <div>
                      <label htmlFor="trialName" className="text-gray-300 mb-1 flex items-center text-sm">
                        <User size={14} className="mr-1 text-red-500" />
                        Name
                      </label>
                      <input
                        type="text"
                        id="trialName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="trialEmail" className="text-gray-300 mb-1 flex items-center text-sm">
                        <Mail size={14} className="mr-1 text-red-500" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="trialEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="trialPhone" className="text-gray-300 mb-1 flex items-center text-sm">
                        <Phone size={14} className="mr-1 text-red-500" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="trialPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="startDate" className="text-gray-300 mb-1 flex items-center text-sm">
                        <Calendar size={14} className="mr-1 text-red-500" />
                        Start Date
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                      />
                    </div>

                    {/* Row 2 */}
                    <div>
                      <label htmlFor="timeSlot" className="block text-gray-300 mb-1 text-sm">
                        Time Slot
                      </label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                      >
                        <option value="" disabled hidden>Select Time</option>
                        <option value="morning">Morning (6:00 AM - 9:00 AM)</option>
                        <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="emergencyContact" className="block text-gray-300 mb-1 text-sm">
                        Emergency Contact
                      </label>
                      <input
                        type="tel"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                        placeholder="Emergency phone"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-300 mb-1 text-sm">
                        Interests (Select multiple)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Weights', 'Cardio', 'Classes', 'Training', 'Yoga', 'CrossFit'].map(interest => (
                          <label key={interest} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="sr-only"
                            />
                            <div className={`w-3 h-3 rounded border mr-1.5 flex items-center justify-center transition-colors ${
                              formData.interests.includes(interest) 
                                ? 'bg-red-600 border-red-600' 
                                : 'border-gray-500'
                            }`}>
                              {formData.interests.includes(interest) && (
                                <CheckCircle size={8} className="text-white" />
                              )}
                            </div>
                            <span className="text-gray-300 text-xs">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes - Full Width */}
                  <div className="mb-4">
                    <label htmlFor="trialMessage" className="block text-gray-300 mb-1 text-sm">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="trialMessage"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full bg-gray-700/50 text-white border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 resize-none"
                      placeholder="Health conditions, fitness goals, or questions..."
                    ></textarea>
                  </div>

                  {/* Footer with Agreement and Submit */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400 flex items-center">
                      <div className="flex items-center space-x-4">
                        <span><span className="text-red-400">✓</span> Safety orientation</span>
                        <span><span className="text-red-400">✓</span> Follow gym rules</span>
                        <span><span className="text-red-400">✓</span> 18+ required</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      BOOK FREE TRIAL
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
                  <CheckCircle size={32} className="text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                FREE TRIAL BOOKED SUCCESSFULLY!
              </h2>
              <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-4 mb-6">
                <p className="text-green-400 font-medium mb-2">YOUR 2- DAY FREE TRIAL DETAILS:</p>
                <div className="text-gray-300 text-sm space-y-1">
                  <p><strong>Start Date:</strong> {new Date(formData.startDate).toLocaleDateString()}</p>
                  <p><strong>Duration:</strong> 2 consecutive days</p>
                  <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8">
                We'll send you a confirmation email with your trial pass and orientation details. 
                Please arrive 15 minutes early on your first day for a quick facility tour.
              </p>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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
    gender: '',
    experience: '',
    goals: '',
    referral: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Optimized change handler with useCallback to prevent re-renders
  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  }, [formData]);

  const resetForm = React.useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      dob: '',
      plan: 'basic',
      gender: '',
      experience: '',
      goals: '',
      referral: '',
      message: ''
    });
    setIsSubmitted(false);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl w-full max-w-4xl aspect-[3/2] max-h-[85vh] overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
          aria-label="Close membership form"
          title="Close"
        >
          <X size={24} />
        </button>

        <div className="h-full flex">
          {/* Left Side - Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Join <span className="text-red-600">POWERGYM</span>
                  </h2>
                  <p className="text-gray-300">
                    Fill in your details and choose your membership plan
                  </p>
                </div>

                {/* Single Grid Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {/* Row 1 */}
                    <div>
                      <label htmlFor="name" className="flex items-center text-gray-300 mb-2">
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
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="flex items-center text-gray-300 mb-2">
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
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="flex items-center text-gray-300 mb-2">
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
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    {/* Row 2 */}
                    <div>
                      <label htmlFor="dob" className="flex items-center text-gray-300 mb-2">
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
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="plan" className="block text-gray-300 mb-2">
                        Membership Plan
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                      >
                        <option value="basic">Basic - $29.99/month</option>
                        <option value="premium">Premium - $49.99/month</option>
                        <option value="elite">Elite - $79.99/month</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-gray-300 mb-2">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender || ''}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Row 3 */}
                    <div>
                      <label htmlFor="experience" className="block text-gray-300 mb-2">
                        Fitness Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience || ''}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                      >
                        <option value="">Select Experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="goals" className="block text-gray-300 mb-2">
                        Primary Goal
                      </label>
                      <select
                        id="goals"
                        name="goals"
                        value={formData.goals || ''}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                      >
                        <option value="">Select Goal</option>
                        <option value="weight_loss">Weight Loss</option>
                        <option value="muscle_gain">Muscle Gain</option>
                        <option value="fitness">General Fitness</option>
                        <option value="strength">Strength Training</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="referral" className="block text-gray-300 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="referral"
                        name="referral"
                        value={formData.referral || ''}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200"
                      >
                        <option value="">Select Option</option>
                        <option value="friend">Friend/Family</option>
                        <option value="social">Social Media</option>
                        <option value="search">Google Search</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Row 4 - Message spans all columns */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600 transition-colors duration-200 resize-none"
                        placeholder="Tell us about your fitness goals, health conditions, or any questions..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
                  >
                    Join PowerGym Now
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
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
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Visual/Branding */}
          <div className="hidden md:flex flex-1 bg-gradient-to-br from-red-900/20 to-red-600/10 p-8 items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">
                POWER<span className="text-white">GYM</span>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>🏋️ Modern Equipment</p>
                <p>⏰ 24/7 Access</p>
                <p>👨‍🏫 Expert Trainers</p>
                <p>🤝 Community Support</p>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                Join 1000+ members who chose PowerGym
              </div>
            </div>
          </div>
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
  const [showFreeTrialForm, setShowFreeTrialForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
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
              {/* <div className="absolute -inset-1 bg-red-600 rounded-full blur-sm opacity-70"></div> */}
              {/* <Dumbbell className="relative text-white z-10" size={28} /> */}
            </div>
            <div className="ml-5 relative">
              <span className="text-white font-bold text-xl tracking-wider">
                POWER<span className="text-red-600">GYM</span>
              </span>
              {/* All-sides glow effect */}
              <div className="absolute -inset-1 bg-red-600/20 rounded-md blur-sm opacity-60"></div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-800 to-transparent"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="relative bg-black bg-opacity-40 backdrop-blur-sm rounded-full px-6 py-2 border border-red-900/30">
              <div className="flex space-x-1">
                <NavLink href="#home" isActive={activeLink === 'home'}>HOME</NavLink>
                <NavLink href="#about" isActive={activeLink === 'about'}>ABOUT</NavLink>
                <NavLink href="#classes" isActive={activeLink === 'classes'}>ClASSES</NavLink>
                <NavLink href="#trainers" isActive={activeLink === 'trainers'}>TRAINERS</NavLink>
                <NavLink href="#pricing" isActive={activeLink === 'pricing'}>PRICING</NavLink>
                <NavLink href="#contact" isActive={activeLink === 'contact'}>CONTACT</NavLink>
              </div>
            </div>
          </div>

          {/* Book Free Trial Button */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => setShowFreeTrialForm(true)}
              className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white px-8 py-2.5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-red-600/30"
            >
              <span className="relative z-10">BOOK FREE TRIAL</span>
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

      {/* Free Trial Form Modal */}
      <FreeTrialForm
        isOpen={showFreeTrialForm}
        onClose={() => setShowFreeTrialForm(false)}
      />
    </nav>
  );
};

const NavLink: React.FC<{ href: string, isActive: boolean, children: React.ReactNode }> = ({ href, isActive, children }) => {
  return (
    <a
      href={href}
      className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full group ${
        isActive
          ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-md shadow-red-600/40'
          : 'text-gray-200 hover:text-white hover:shadow-lg hover:shadow-red-600/50'
      }`}
    >
      <span className="relative z-10">{children}</span>
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
          ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-md shadow-red-600/40'
          : 'text-gray-200 hover:text-white hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-600/50'
      }`}
    >
      {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-red-500 rounded-r-full"></span>}
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Navbar;