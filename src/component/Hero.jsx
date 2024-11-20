import React from 'react';
import heroImage from "../assets/hero-Cg8TL_bq.webp";
import "../style/hero.css";

const Hero = () => {
  return (
    <section className="hero-section container-fluid bg-purple text-yellow d-flex align-items-center" aria-labelledby="hero-heading">
      <div className="row w-100 mt-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center text-lg-start hero-content">
          <h1 id="hero-heading" className="display-4 fw-bold">EMPOWERING SMES THROUGH THE PROVISIONS OF QUICK LOANS</h1>
          <p className="lead mt-4 mb-4">
            - Whether you are looking for a loan to boost your business or trying to save through our monthly ajo, we are your number 1 trusted partner.
          </p>
          <div className="d-flex gap-3 flex-column flex-lg-row">
            <button className="btn btn-yellow btn-lg" aria-label="Request a loan">Request Loan</button>
            <button className="btn btn-light-purple btn-lg" aria-label="Save with us">Save with us</button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img 
            src={heroImage} 
            alt="A business owner happily receiving a loan" 
            className="img-fluid rounded hero-image"
            srcSet={`${heroImage}?w=500&h=500 500w, ${heroImage}?w=800&h=800 800w`}
            sizes="(max-width: 768px) 100vw, 500px" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
