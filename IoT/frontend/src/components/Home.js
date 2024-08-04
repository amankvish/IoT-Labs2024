import React from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaGlobe, FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa';
import '../styles/Home.css'; // Adjust the path if necessary

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <div className="container">
            <h1 className="display-4 custom-font animate__animated animate__fadeIn">Welcome to IoT Labs</h1>
            <p className="lead animate__animated animate__fadeIn animate__delay-1s">Innovative Solutions for a Connected World</p>
            <Link to="/services" className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-2s">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-5 animate__animated animate__fadeIn">Our Core Services</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="service-card animate__animated animate__fadeIn animate__delay-1s">
                <FaCogs className="icon mb-3" />
                <h5 className="card-title">IoT Solutions</h5>
                <p className="card-text">Innovative IoT solutions for modern businesses.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="service-card animate__animated animate__fadeIn animate__delay-2s">
                <FaGlobe className="icon mb-3" />
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Professional web development services.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="service-card animate__animated animate__fadeIn animate__delay-3s">
                <FaMoneyBillWave className="icon mb-3" />
                <h5 className="card-title">Billing Software</h5>
                <p className="card-text">Efficient billing software solutions.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="service-card animate__animated animate__fadeIn animate__delay-4s">
                <FaShoppingCart className="icon mb-3" />
                <h5 className="card-title">E-commerce</h5>
                <p className="card-text">Comprehensive e-commerce services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-5 animate__animated animate__fadeIn">Success Stories</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active animate__animated animate__fadeIn">
                <div className="d-flex justify-content-center">
                  <div className="card w-75">
                    <div className="card-body">
                      <p className="card-text">"IoT Labs transformed our business with their IoT solutions. We saw a 30% increase in efficiency!"</p>
                      <p className="card-text"><strong>- Happy Client</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item animate__animated animate__fadeIn">
                <div className="d-flex justify-content-center">
                  <div className="card w-75">
                    <div className="card-body">
                      <p className="card-text">"The web development team at IoT Labs is outstanding. They delivered beyond our expectations."</p>
                      <p className="card-text"><strong>- Satisfied Customer</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-5 animate__animated animate__fadeIn">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="feature-card animate__animated animate__fadeIn animate__delay-1s">
                <h5 className="card-title">Expert Team</h5>
                <p className="card-text">Our team consists of industry experts with years of experience.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="feature-card animate__animated animate__fadeIn animate__delay-2s">
                <h5 className="card-title">Innovative Solutions</h5>
                <p className="card-text">We provide cutting-edge solutions tailored to your needs.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="feature-card animate__animated animate__fadeIn animate__delay-3s">
                <h5 className="card-title">Customer Focus</h5>
                <p className="card-text">We prioritize customer satisfaction and long-term relationships.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="feature-card animate__animated animate__fadeIn animate__delay-4s">
                <h5 className="card-title">Reliable Support</h5>
                <p className="card-text">Our support team is available 24/7 to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
