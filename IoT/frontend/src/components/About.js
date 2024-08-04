import React from 'react';
import '../styles/About.css'; // Adjust the path if necessary

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5 text-center">
        <div className="container">
          <h1 className="display-4 text-white">About Us</h1>
          <p className="lead text-white">Innovating with technology to drive your success</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview py-5">
        <div className="container">
          <h2 className="section-heading text-center">Who We Are</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="overview-img-container">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Company Overview" />
              </div>
            </div>
            <div className="col-md-6">
              <p>At IoT Labs, we are dedicated to leading technological innovation. Our mission is to provide exceptional IoT solutions, state-of-the-art web development services, and comprehensive e-commerce solutions. We aim to drive efficiency and growth through our cutting-edge technology and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="mission-values py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2 className="section-heading">Our Mission</h2>
              <p>Our mission is to leverage advanced technology to solve real-world problems and empower businesses to thrive in the digital age. We are committed to innovation, quality, and excellence in everything we do.</p>
            </div>
            <div className="col-md-6">
              <h2 className="section-heading">Core Values</h2>
              <ul className="values-list">
                <li><strong>Innovation:</strong> Constantly pushing the boundaries of technology.</li>
                <li><strong>Integrity:</strong> Upholding the highest ethical standards in all our interactions.</li>
                <li><strong>Customer Focus:</strong> Delivering solutions that exceed our clients' expectations.</li>
                <li><strong>Excellence:</strong> Striving for perfection in every project.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="company-history py-5">
        <div className="container">
          <h2 className="section-heading text-center">Our History</h2>
          <p className="text-center">Founded in 2020, IoT Labs has grown from a small startup into a leading provider of technology solutions. Over the years, we have successfully completed numerous projects, expanding our expertise and building a strong reputation in the industry.</p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section py-5 bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="team-member text-center">
                <img src="https://via.placeholder.com/150" className="img-fluid rounded-circle mb-3" alt="CEO" />
                <h4 className="team-member-name">John Doe</h4>
                <p className="team-member-role">CEO & Founder</p>
                <p>John leads our team with a vision to revolutionize technology and deliver outstanding results for our clients.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member text-center">
                <img src="https://via.placeholder.com/150" className="img-fluid rounded-circle mb-3" alt="Co-Founder" />
                <h4 className="team-member-name">Jane Smith</h4>
                <p className="team-member-role">Co-Founder & CTO</p>
                <p>Jane brings extensive technical expertise and drives our innovation in IoT solutions and software development.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member text-center">
                <img src="https://via.placeholder.com/150" className="img-fluid rounded-circle mb-3" alt="Lead Developer" />
                <h4 className="team-member-name">Alice Johnson</h4>
                <p className="team-member-role">Lead Developer</p>
                <p>Alice spearheads our development team, ensuring that our projects meet the highest standards of quality and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials py-5 bg-light">
        <div className="container">
          <h2 className="section-heading text-center">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="testimonial-card">
                <p className="testimonial-text">"IoT Labs transformed our business with their IoT solutions. We saw a 30% increase in efficiency!"</p>
                <p className="testimonial-author"><strong>- Happy Client</strong></p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="testimonial-card">
                <p className="testimonial-text">"The web development team at IoT Labs is outstanding. They delivered beyond our expectations."</p>
                <p className="testimonial-author"><strong>- Satisfied Customer</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info py-5">
        <div className="container text-center">
          <h2 className="section-heading">Get In Touch</h2>
          <p>If you have any questions or need further information, feel free to contact us.</p>
          <a href="mailto:contact@iotlabs.com" className="btn btn-primary btn-lg">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default About;
