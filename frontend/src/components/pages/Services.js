import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaNetworkWired, FaChartLine, FaDatabase, FaShieldAlt, FaCloud } from 'react-icons/fa';
import '../../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions that drive innovation and efficiency.",
      icon: <FaRobot className="service-icon" />,
      color: "#FF6B6B"
    },
    {
      title: "IoT Solutions",
      description: "Connect and optimize your devices with our comprehensive IoT platform and services.",
      icon: <FaNetworkWired className="service-icon" />,
      color: "#4ECDC4"
    },
    {
      title: "Data Analytics",
      description: "Unlock valuable insights from your data with advanced analytics and visualization tools.",
      icon: <FaChartLine className="service-icon" />,
      color: "#45B7D1"
    },
    {
      title: "Cloud Services",
      description: "Scale your operations with our secure and reliable cloud infrastructure solutions.",
      icon: <FaCloud className="service-icon" />,
      color: "#96CEB4"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and expertise.",
      icon: <FaShieldAlt className="service-icon" />,
      color: "#FFEEAD"
    },
    {
      title: "Big Data",
      description: "Handle massive datasets efficiently with our big data processing and storage solutions.",
      icon: <FaDatabase className="service-icon" />,
      color: "#D4A5A5"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Digital Solutions <span>That Drive Growth</span></h1>
          <p>We combine innovative technology with strategic thinking to deliver results that matter</p>
          <button className="cta-button">Explore Our Work</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span>Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive digital services tailored to your business needs
          </motion.p>
        </div>
        
        <div className="expertise-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{ '--card-color': service.color }}
            >
              <div className="card-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.button
                className="learn-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your digital goals</p>
          <div className="cta-buttons">
            <button className="primary-button">Get a Free Consultation</button>
            <button className="secondary-button">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;