import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Dumbbell className="text-red-600 mr-2" size={28} />
              <span className="text-white font-bold text-xl">POWER<span className="text-red-600">GYM</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Dedicated to helping you achieve your fitness goals with state-of-the-art equipment, expert trainers, and a supportive community.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Youtube size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Working Hours
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></div>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Friday:</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Public Holidays:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-red-600 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">123 Fitness Street, New York, NY 10001</span>
              </li>
              <li className="flex">
                <Phone className="text-red-600 mr-3 flex-shrink-0" size={20} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-red-500 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex">
                <Mail className="text-red-600 mr-3 flex-shrink-0" size={20} />
                <a href="mailto:info@powergym.com" className="text-gray-400 hover:text-red-500 transition-colors">info@powergym.com</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Subscribe for Updates</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-md transition duration-300">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PowerGym. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode, href: string }> = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;