import React from 'react';

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#7e295b",
          color: "#f4c542",
          minHeight: "100vh",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
        }}
      >
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#f4c542" }}>
            Contact Us
          </h2>
          <div className="row">
            <div
              className="col-md-6 d-flex flex-column align-items-center"
              style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
              }}
            >
              <div
                className="mb-4 p-4 rounded"
                style={{
                  backgroundColor: "#f8d7ef",
                  color: "#7e295b",
                  width: "220px",
                  textAlign: "center",
                }}
              >
                <h5>
                  <i className="bi bi-geo-alt-fill"></i> Office Address
                </h5>
                <p>
                  29 Bakare Faro Street, Ajegunle-Ifelodun, Lagos <br />
                  102103, Lagos
                </p>
              </div>

              <div
                className="mb-4 p-4 rounded"
                style={{
                  backgroundColor: "#f4c542",
                  color: "#7e295b",
                  width: "220px",
                  textAlign: "center",
                }}
              >
                <h5>
                  <i className="bi bi-envelope-fill"></i> Email Address
                </h5>
                <p>pennybox@pennybox.com</p>
              </div>

              <div
                className="mb-4 p-4 rounded"
                style={{
                  backgroundColor: "#701F58",
                  color: "#FEAA47",
                  width: "220px",
                  textAlign: "center",
                }}
              >
                <h5>
                  <i className="bi bi-telephone-fill"></i> Mobile Number
                </h5>
                <p>080pennybox</p>
              </div>
            </div>

            {/* Map Section */}
            <div className="col-md-6">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.9022851744864!2d3.3252!3d6.4569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d93c3c3ed9%3A0xf123456789abcde!2sAjegunle%2C%20Lagos!5e0!3m2!1sen!2sng!4v1635163819123!5m2!1sen!2sng"
                width="100%"
                height="400px"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
