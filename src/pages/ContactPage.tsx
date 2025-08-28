import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - PowerGym";
  }, []);

  return (
    <div className="pt-20">
      <Testimonials />
      <Contact />
    </div>
  );
};

export default ContactPage;
