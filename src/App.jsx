import React from 'react'
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import About from './components/About';
import Faq from './components/Faq';
import Social from './components/Social';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Social />
      <Academics />
      <Gallery />
      <About />
      <Faq/>
      <Footer />
    </>
  )
}

export default App