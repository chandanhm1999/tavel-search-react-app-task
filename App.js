import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/Hero';
import Destinations from './components/designations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Select';
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    <ImgCarousel />
    <Footer />
    </>
  );
}

export default App;
