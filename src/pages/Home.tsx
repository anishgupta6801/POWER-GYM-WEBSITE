import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Classes from '../components/Classes';
import Trainers from '../components/Trainers';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "PowerGym - Build Your Body, Transform Your Life";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
