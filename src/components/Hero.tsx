import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/pexels-photo-1552242.jpeg"
        >
          <source src="/Gym_Hero_Background_Video_Generation.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/pexels-photo-1552242.jpeg"
            alt="Gym background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h2 className="text-red-600 font-bold text-xl md:text-2xl uppercase tracking-wider mb-4">DESIGNED BY ANISH</h2>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            BUILD YOUR <span className="text-red-600">BODY</span>, 
            TRANSFORM YOUR <span className="text-red-600">LIFE</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            Join our community and achieve your fitness goals with our state-of-the-art facilities and expert trainers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToPricing}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300"
            >
              GET STARTED
            </button>
            <button 
              onClick={openVideoModal}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-bold text-lg transition duration-300 flex items-center"
            >
              <Play size={16} className="mr-2" />
              TOUR OUR GYM
            </button>
          </div>
          
          <div className="flex items-center mt-12">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/11${3160+item}/pexels-photo-11${3160+item}.jpeg`}
                    alt="Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="text-white font-bold">500+ <span className="text-red-500">HAPPY MEMBERS</span></p>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <a href="#about" className="text-white animate-bounce mb-8" title="Scroll to About section">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>

      {/* YouTube Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700/50">
            <button
              type="button"
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="Close video modal"
              title="Close"
            >
              <X size={24} />
            </button>

            <div className="p-6">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">
                  TAKE A <span className="text-red-600">VIRTUAL TOUR</span> OF POWERGYM
                </h2>
                <p className="text-gray-300 text-sm">
                  Experience our state-of-the-art facilities and equipment
                </p>
              </div>

              {/* YouTube Embed Container */}
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/7YJ9jMgbdc8?si=rgpcnyHJseMWQSsn&autoplay=1&rel=0&modestbranding=1"
                  title="POWERGYM VIRTUAL TOUR"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-400 text-xs">
                  Get inspired by our facilities • Join our community today
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;