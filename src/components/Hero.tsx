import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
          alt="Gym background" 
          className="w-full h-full object-cover"
        />
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
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">
              GET STARTED
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-bold text-lg transition duration-300 flex items-center">
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
              <p className="text-white font-bold">1500+ <span className="text-red-500">Happy Members</span></p>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <a href="#about" className="text-white animate-bounce mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;