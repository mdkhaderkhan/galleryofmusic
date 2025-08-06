import React from 'react';
import Hero from '@/app/component/Hero'; // ✅ correct path and casing
import FeaturedCourses from '@/app/component/FeaturedCourses';
import Footer from '@/app/component/Footer';
import About from './component/About';

const page = () => {
  return (
    <div>
      <Hero />
      <About/>
      <FeaturedCourses/>
      <Footer/>

    </div>
  );
  
};

export default page;

