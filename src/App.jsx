import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
   
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
