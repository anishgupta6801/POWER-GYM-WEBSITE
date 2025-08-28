import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us - PowerGym";
  }, []);

  return (
    <div className="pt-20">
      <About />
    </div>
  );
};

export default AboutPage;
