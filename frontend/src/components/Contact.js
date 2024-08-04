import React from 'react';
import '../styles/Contact.css'; // Adjust the path if necessary

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero py-5 text-center">
        <div className="container">
          <h1 className="display-3">Contact Us</h1>
          <p className="lead">We are here to assist you. Reach out with any inquiries or feedback.</p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="contact-content py-5">
        <div className="container">
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-6 mb-4">
              <div className="contact-info bg-light p-4 rounded shadow-sm">
                <h2 className="section-heading mb-4">Our Contact Details</h2>
                <div className="contact-item mb-3">
                  <h5>Address:</h5>
                  <p>1234 IoT Street, Tech City, TX 12345</p>
                </div>
                <div className="contact-item mb-3">
                  <h5>Email:</h5>
                  <p><a href="mailto:info@iotlabs.com">info@iotlabs.com</a></p>
                </div>
                <div className="contact-item mb-3">
                  <h5>Phone:</h5>
                  <p><a href="tel:+1234567890">(123) 456-7890</a></p>
                </div>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.908821509708!2d77.31748530979197!3d28.536499354236803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd202a67a8f7%3A0x9bb6f6b7c4979d36!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1699421345502!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <div className="contact-form-container bg-light p-4 rounded shadow-sm">
                <h2 className="section-heading mb-4">Send Us a Message</h2>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
