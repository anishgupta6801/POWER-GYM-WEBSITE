import React, { useState } from 'react';

interface ClassType {
  id: number;
  title: string;
  category: string;
  trainer: string;
  image: string;
  schedule: string;
  duration: string;
}

const classData: ClassType[] = [
  {
    id: 1,
    title: "Strength Training",
    category: "Strength",
    trainer: "John Miller",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
    schedule: "Mon, Wed, Fri • 8:00 AM",
    duration: "60 min"
  },
  {
    id: 2,
    title: "HIIT Workout",
    category: "Cardio",
    trainer: "Sarah Johnson",
    image: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg",
    schedule: "Tue, Thu • 7:00 PM",
    duration: "45 min"
  },
  {
    id: 3,
    title: "Yoga Flow",
    category: "Mind & Body",
    trainer: "Emma Davis",
    image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    schedule: "Mon, Wed, Fri • 6:00 PM",
    duration: "60 min"
  },
  {
    id: 4,
    title: "CrossFit",
    category: "Strength",
    trainer: "Mike Wilson",
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg",
    schedule: "Tue, Thu, Sat • 9:00 AM",
    duration: "75 min"
  },
  {
    id: 5,
    title: "Spinning",
    category: "Cardio",
    trainer: "Lisa Thompson",
    image: "https://images.pexels.com/photos/4429141/pexels-photo-4429141.jpeg",
    schedule: "Mon, Wed, Fri • 5:30 PM",
    duration: "45 min"
  },
  {
    id: 6,
    title: "Pilates",
    category: "Mind & Body",
    trainer: "Amanda Clark",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    schedule: "Tue, Thu • 10:00 AM",
    duration: "60 min"
  }
];

const Classes: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'Strength', 'Cardio', 'Mind & Body'];
  
  const filteredClasses = filter === 'All' 
    ? classData 
    : classData.filter(c => c.category === filter);

  return (
    <section id="classes" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR <span className="text-red-600">CLASSES</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Join our diverse range of classes led by expert instructors designed to help you achieve your fitness goals, no matter your experience level.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((classItem) => (
            <div 
              key={classItem.id} 
              className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
                  {classItem.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{classItem.title}</h3>
                <p className="text-gray-400 mb-4">Trainer: {classItem.trainer}</p>
                
                <div className="flex justify-between text-gray-300 mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-2 text-red-500">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    {classItem.schedule}
                  </div>
                </div>
                
                <div className="flex justify-between text-gray-300 mb-6">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-2 text-red-500">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {classItem.duration}
                  </div>
                </div>
                
                <button className="w-full bg-gray-800 hover:bg-red-600 text-white py-3 rounded font-medium transition duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">
            VIEW ALL CLASSES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Classes;