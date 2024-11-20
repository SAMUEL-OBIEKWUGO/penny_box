import React from 'react'
import about_img from "../assets/about-BacyOJF5.webp"
import "../style/about.css";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
    <section className="about-us-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <img
              src={about_img}
              alt="Team working together"
              className="img-fluid rounded about-image"
            />
          </Col>
          <Col lg={6}>
            <div className="about-content text-yellow">
              <h2 className="fw-bold">About Us</h2>
              <p>
                At PennyBox, we are dedicated to empowering individuals and small businesses
                to achieve their financial goals through a comprehensive suite of services. With a
                focus on community and support, we offer tailored loan solutions, innovative
                savings programs, and expert financial advisory services.
              </p>
              <h3 className="fw-bold mt-4">Our Mission</h3>
              <p>
                Our mission is to provide accessible financial solutions that foster growth and
                stability for our clients. We understand that every financial journey is unique, and
                we are committed to helping you navigate yours with confidence.
              </p>
              <h3 className="fw-bold mt-4">Our Commitment</h3>
              <p>
                At PennyBox, we are committed to providing a supportive environment where
                you can thrive financially. We believe in building lasting relationships with our
                clients, offering the tools and resources you need to succeed. Whether you&apos;re a
                small business owner looking for funding, an individual saving for the future, or
                someone seeking financial advice, we are here to help you every step of the way.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default About
