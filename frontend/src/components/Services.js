import React from 'react';
import '../styles/Services.css'; // Adjust the path if necessary

const Services = () => {
  return (
    <div className="services-container">
      <section className="services-hero text-center py-5">
        <div className="container">
          <h1 className="display-4 text-white">Our Services</h1>
          <p className="lead text-white">Explore the range of services we offer to elevate your business.</p>
        </div>
      </section>

      <section className="services-list py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card service-card">
                <div className="card-body">
                  <h5 className="card-title">IoT Solutions</h5>
                  <p className="card-text">Innovative IoT solutions tailored for modern businesses. Enhance your operations with our advanced technology.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card service-card">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Professional web development services that drive engagement and growth. Custom solutions for your digital presence.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card service-card">
                <div className="card-body">
                  <h5 className="card-title">Billing Software</h5>
                  <p className="card-text">Efficient and reliable billing software designed to streamline your invoicing and financial operations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card service-card">
                <div className="card-body">
                  <h5 className="card-title">E-commerce</h5>
                  <p className="card-text">Comprehensive e-commerce services that help you reach a global audience and boost your online sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Services;
