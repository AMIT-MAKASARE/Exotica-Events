import './App.css'
import './output.css'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallary';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {

  return (
    <>
     <div className="font-sans">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Gallery/>
      <Events/>
      <Contact/>
    </div>
    </>
  )
}

export default App
