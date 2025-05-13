import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TrainerProps {
  name: string;
  role: string;
  image: string;
  experience: string;
  specialty: string[];
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const trainersData: TrainerProps[] = [
  {
    name: "John Miller",
    role: "Head Trainer",
    image: "https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg",
    experience: "10+ Years",
    specialty: ["Strength Training", "Bodybuilding", "Nutrition"],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Cardio Specialist",
    image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg",
    experience: "8 Years",
    specialty: ["HIIT", "Aerobics", "Weight Loss"],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Mike Wilson",
    role: "CrossFit Coach",
    image: "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg",
    experience: "7 Years",
    specialty: ["CrossFit", "Functional Training", "Endurance"],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Emma Davis",
    role: "Yoga Instructor",
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg",
    experience: "6 Years",
    specialty: ["Yoga", "Meditation", "Flexibility"],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  }
];

const TrainerCard: React.FC<TrainerProps> = ({ name, role, image, experience, specialty, socialMedia }) => {
  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
      <div className="relative overflow-hidden h-96">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="mb-4">
              <div className="text-red-500 font-medium mb-1">Experience</div>
              <div className="text-white">{experience}</div>
            </div>
            
            <div className="mb-4">
              <div className="text-red-500 font-medium mb-1">Specialty</div>
              <div className="flex flex-wrap gap-2">
                {specialty.map((item, index) => (
                  <span key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3">
              {socialMedia.facebook && (
                <a href={socialMedia.facebook} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300">
                  <Facebook size={16} />
                </a>
              )}
              {socialMedia.instagram && (
                <a href={socialMedia.instagram} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300">
                  <Instagram size={16} />
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300">
                  <Twitter size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-red-500">{role}</p>
      </div>
    </div>
  );
};

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">EXPERT <span className="text-red-600">TRAINERS</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our certified professional trainers are here to help you achieve your fitness goals with personalized guidance and motivation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-8">
            Want to join our team of professional trainers?
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">
            BECOME A TRAINER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;