import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    text: "I had issue with paying my rent, I collected loan from PennyBox at a good interest rate, and I was able to pay back with a monthly installation of my salary",
    author: "Miss Juliet",
    bgColor: "#7e295b",
    textColor: "#f4c542",
  },
  {
    text: "When I wanted to start my indomie wholesale business, I reached out to PennyBox and after going through the necessary verification, I was granted a loan at an affordable interest rate",
    author: "Iya Basirat",
    bgColor: "#f4c542",
    textColor: "#7e295b",
  },
  {
    text: "I wanted to expand my business and build another tailoring shop at another location. PennBox helped me to accomplish this",
    author: "Samuel Tailors",
    bgColor: "#7e295b",
    textColor: "#f4c542",
  },
  {
    text: "Thanks to PennyBox, I was able to pay for my children’s school fees on time. Their loan process is fast and stress-free.",
    author: "Mr. Adewale",
    bgColor: "#f4c542",
    textColor: "#7e295b",
  },
  {
    text: "PennyBox supported my farming business by providing funds during the planting season. I highly recommend their services.",
    author: "Farmer John",
    bgColor: "#7e295b",
    textColor: "#f4c542",
  },
  {
    text: "I was able to purchase equipment for my photography business with a loan from PennyBox. It’s been a game-changer!",
    author: "Chuks Photography",
    bgColor: "#f4c542",
    textColor: "#7e295b",
  },
  {
    text: "PennyBox helped me when I needed urgent medical funds. The repayment plan is flexible and manageable.",
    author: "Grace O.",
    bgColor: "#7e295b",
    textColor: "#f4c542",
  },
  {
    text: "I used PennyBox to fund my small retail shop. The low-interest rate made it easy for me to grow my business.",
    author: "Kemi Stores",
    bgColor: "#f4c542",
    textColor: "#7e295b",
  },
  {
    text: "The customer service at PennyBox is top-notch. They made the loan application process seamless.",
    author: "Tunde A.",
    bgColor: "#7e295b",
    textColor: "#f4c542",
  },
  {
    text: "With PennyBox, I was able to renovate my house. I’m grateful for their excellent service and fair rates.",
    author: "Mrs. Funmi",
    bgColor: "#f4c542",
    textColor: "#7e295b",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-light py-5">
    <div className="container text-center">
      <h2 className="mb-4">Testimonial</h2>
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel" // This enables auto-moving slides
        data-bs-interval="3000" // Sets interval to 3 seconds
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="p-4 rounded mx-auto"
                style={{
                  maxWidth: "600px",
                  background: testimonial.bgColor,
                  color: testimonial.textColor,
                }}
              >
                <p
                  className="mb-3"
                  style={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  {testimonial.text}
                </p>
                <h5 className="fw-bold">{testimonial.author}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Testimonial;
