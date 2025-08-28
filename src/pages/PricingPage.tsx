import React, { useEffect } from 'react';
import Pricing from '../components/Pricing';

const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Membership Pricing - PowerGym";
  }, []);

  return (
    <div className="pt-20">
      <Pricing />
    </div>
  );
};

export default PricingPage;
