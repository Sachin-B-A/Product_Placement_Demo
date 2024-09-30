// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilmSection from '../components/FilmSection';
import BiddingSection from '../components/BiddingSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FilmSection />
      <BiddingSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
