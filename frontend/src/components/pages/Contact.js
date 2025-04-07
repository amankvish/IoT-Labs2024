import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../../styles/Contact.css'; // Adjust the path if necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in <span>Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're here to help and answer any questions you might have.
          </motion.p>
        </div>
        <div className="hero-overlay"></div>
      </motion.section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="info-card">
                <h2>Contact Information</h2>
                <div className="info-items">
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="info-text">
                      <h3>Address</h3>
                      <p>1234 IoT Street, Tech City, TX 12345</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <FaEnvelope />
                    </div>
                    <div className="info-text">
                      <h3>Email</h3>
                      <p>info@iotlabs.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <FaPhone />
                    </div>
                    <div className="info-text">
                      <h3>Phone</h3>
                      <p>+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <FaClock />
                    </div>
                    <div className="info-text">
                      <h3>Working Hours</h3>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-link">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="form-card">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane className="icon" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
