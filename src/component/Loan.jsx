import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import backgroundImage from "../assets/whyus-CpQz0Cpv.webp"

const Loan = () => {
  return (
    <>
    <div 
      style={{ 
        // eslint-disable-next-line no-undef
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "50vh", 
        color: "yellow",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem"
      }}
    >
      <Container>
        <Row className="text-center">
          <Col>
            <h1 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
              We Provide Loans With the Best Interest Rate
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
              We pride ourselves on offering loans with some of the best interest 
              rates in the market. Whether you’re a small business owner or an 
              individual looking for financial support, our competitive rates 
              help you manage your finances effectively while reducing the cost 
              of borrowing.
            </p>
            <Button variant="primary" size="lg" style={{ backgroundColor: "#800080", border: "none" }}>
              Get Loan
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Loan
