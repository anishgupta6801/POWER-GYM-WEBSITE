import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface TestimonialType {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonialData: TestimonialType[] = [
  {
    id: 1,
    name: "Jennifer Smith",
    role: "Lost 30 lbs in 6 months",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    quote: "PowerGym changed my life completely. The trainers are exceptional, and the community is so supportive. I've never felt stronger or more confident!",
    rating: 5
  },
  {
    id: 2,
    name: "David Wilson",
    role: "Marathon Runner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "As a marathon runner, I needed specialized training to improve my performance. The trainers at PowerGym designed a program specifically for my needs, and I've seen incredible results.",
    rating: 5
  },
  {
    id: 3,
    name: "Michelle Thompson",
    role: "Fitness Enthusiast",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    quote: "I've been a member of several gyms over the years, but PowerGym stands out for its amazing facilities, knowledgeable staff, and the positive atmosphere. It feels like family!",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };
  
  const currentTestimonial = testimonialData[activeIndex];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Large Quote Icon Background */}
      <div className="absolute top-20 left-10 text-red-600 opacity-10">
        <Quote size={300} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SUCCESS <span className="text-red-600">STORIES</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear what our members have to say about their transformative experiences at PowerGym.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="col-span-2">
              <div className="relative">
                <div className="w-[280px] h-[280px] mx-auto overflow-hidden rounded-full border-4 border-red-600">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-0 bg-red-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Quote size={24} className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="col-span-3">
              <div className="flex text-yellow-400 text-xl mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                ))}
              </div>
              
              <blockquote className="text-white text-xl italic mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div>
                <h4 className="text-xl font-bold text-white">{currentTestimonial.name}</h4>
                <p className="text-red-500">{currentTestimonial.role}</p>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-red-600' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;