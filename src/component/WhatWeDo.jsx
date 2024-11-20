import React from 'react';
import "../style/whatwedo.css";

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section py-5">
      <h2 className="text-center fw-bold mb-4">What we do</h2>
      <hr className="divider mx-auto mb-4" />
      <div className="row text-center">
        
        {/* Loan Request Card */}
        <div className="col-md-4 mb-3">
          <div className="card bg-dark-purple text-yellow p-4 h-100">
            <h3 className="fw-bold">Loan Request</h3>
            <p>
              We understand that small businesses are the backbone of our economy. That&apos;s why we offer tailored loan solutions designed to meet the unique needs of entrepreneurs like you. Whether you&apos;re looking to expand your operations, invest in new equipment, or manage cash flow, we&apos;re here to support your growth.
            </p>
          </div>
        </div>
        
        {/* Savings Card */}
        <div className="col-md-4 mb-3">
          <div className="card bg-yellow text-dark-purple p-4 h-100">
            <h3 className="fw-bold">Savings</h3>
            <p>
              Are you looking to grow your savings in a simple and effective way? Join our Ajo savings program! Whether you prefer to save daily, weekly, or monthly, we provide a flexible platform that fits your lifestyle and financial goals.
            </p>
          </div>
        </div>
        
        {/* Financial Advisory Card */}
        <div className="col-md-4 mb-3">
          <div className="card bg-dark-purple text-yellow p-4 h-100">
            <h3 className="fw-bold">Financial Advisory</h3>
            <p>
              We believe that making informed financial decisions is key to achieving your financial goals. That&apos;s why we offer comprehensive financial advisory services designed to help you navigate the complexities of personal finance and investments.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhatWeDo;
