import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProperties />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;