import React from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  isPopular?: boolean;
  features: PlanFeature[];
  buttonText: string;
}

const pricingData: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      { name: "Gym access (6am-10pm)", included: true },
      { name: "Free fitness consultation", included: true },
      { name: "1 Group class per week", included: true },
      { name: "Free parking", included: true },
      { name: "Personal trainer sessions", included: false },
      { name: "Access to all locations", included: false },
      { name: "Free nutrition plan", included: false },
    ],
    buttonText: "GET STARTED"
  },
  {
    id: 2,
    name: "Premium",
    price: 59,
    period: "month",
    isPopular: true,
    features: [
      { name: "24/7 Gym access", included: true },
      { name: "Free fitness consultation", included: true },
      { name: "5 Group classes per week", included: true },
      { name: "Free parking", included: true },
      { name: "2 Personal trainer sessions", included: true },
      { name: "Access to all locations", included: true },
      { name: "Free nutrition plan", included: false },
    ],
    buttonText: "GET STARTED"
  },
  {
    id: 3,
    name: "Elite",
    price: 99,
    period: "month",
    features: [
      { name: "24/7 Gym access", included: true },
      { name: "Free fitness consultation", included: true },
      { name: "Unlimited Group classes", included: true },
      { name: "Free parking", included: true },
      { name: "5 Personal trainer sessions", included: true },
      { name: "Access to all locations", included: true },
      { name: "Custom nutrition plan", included: true },
    ],
    buttonText: "GET STARTED"
  }
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className={`${
      plan.isPopular 
        ? 'border-2 border-red-600 relative transform scale-105 z-10' 
        : 'border border-gray-800'
    } bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.03]`}>
      
      {plan.isPopular && (
        <div className="bg-red-600 text-white text-center py-1 font-medium">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
        
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold text-white">${plan.price}</span>
          <span className="text-gray-400 ml-2">/ {plan.period}</span>
        </div>
        
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <Check className="text-red-500 mt-1 mr-3 flex-shrink-0" size={18} />
              ) : (
                <X className="text-gray-500 mt-1 mr-3 flex-shrink-0" size={18} />
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                {feature.name}
              </span>
            </div>
          ))}
        </div>
        
        <button className={`w-full py-3 px-6 rounded-md font-bold transition duration-300 ${
          plan.isPopular 
            ? 'bg-red-600 hover:bg-red-700 text-white' 
            : 'bg-gray-800 hover:bg-gray-700 text-white'
        }`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MEMBERSHIP <span className="text-red-600">PLANS</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose the perfect membership plan that fits your fitness goals and budget. All plans include access to our state-of-the-art facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Plan?</h3>
          <p className="text-gray-300 mb-6">
            We offer customized corporate memberships and family plans. Contact us for more information.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;