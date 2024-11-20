import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero from './component/Hero'
import Navbar from './component/Navbars'
import WhatWeDo from './component/WhatWeDo';
import About from './component/About';
import Loan from './component/Loan';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhatWeDo/>
      <About/>
      <Loan/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
