import React from 'react';
import { Dumbbell, Clock, Award, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-black bg-opacity-80 rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="text-red-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">ABOUT <span className="text-red-600">POWERGYM</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We are more than just a gym - we're a community dedicated to helping you achieve your fitness goals and transform your life through expert guidance and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Dumbbell size={40} />}
            title="MODERN EQUIPMENT"
            description="State-of-the-art fitness equipment to help you train effectively and reach your goals faster."
          />
          <Feature 
            icon={<Clock size={40} />}
            title="12/7 ACCESS"
            description="Our facilities are open 12 hours a day, 6 days a week, so you can work out on your schedule."
          />
          <Feature 
            icon={<Award size={40} />}
            title="EXPERT TRAINERS"
            description="Our certified personal trainers will create personalized plans to help you achieve your fitness goals."
          />
          <Feature 
            icon={<Users size={40} />}
            title="COMMUNITY SUPPORT"
            description="Join a supportive community of like-minded individuals all working toward their fitness goals."
          />
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" 
              alt="Gym interior" 
              className="rounded-lg w-full object-cover h-[500px] transition-all duration-300 hover:shadow-xl hover:shadow-red-1000/50 transform hover:scale-[1.02]"
            />
            <div className="absolute -bottom-8 -right-8 bg-red-600 p-6 rounded-lg hidden md:block">
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="text-white">Years of Experience</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl text-red-600 font-bold mb-4">WHY CHOOSE US</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              WE ARE DEDICATED  TO BUILDING YOUR BEST SELF
            </h2>
            <p className="text-gray-300 mb-8">
              At PowerGym, we believe that fitness is more than just lifting weights – it's about building strength, confidence, and a healthier lifestyle. Our mission is to provide a welcoming environment where anyone, regardless of their fitness level, can work toward their goals with the support they need.
            </p>
            <div className="space-y-4 mb-8">
              {['Professional Training Programs', 'Nutritional Guidance', 'Modern Facilities & Equipment', 'Supportive Community'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300 text-center"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;