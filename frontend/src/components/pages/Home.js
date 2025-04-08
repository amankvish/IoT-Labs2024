import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMicrochip,
  FaRobot,
  FaShieldAlt,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import Card from "../Card";
import SectionTitle from "../SectionTitle";
import "../../styles/Home.css";

// Image imports
import heroIllustration from "../../assets/images/hero-illustration.png";
import iotChip from "../../assets/images/iot-chip.png";
import smartHome from "../../assets/images/smart-home.png";
import dataAnalytics from "../../assets/images/data-analytics.png";
import iotDevices from "../../assets/images/iot-devices.jpg";

const Home = () => {
  const services = [
    {
      icon: <FaMicrochip size={40} />,
      title: "IoT Solutions",
      description:
        "Custom IoT systems for smart homes, industrial automation, and more.",
      link: "/services#iot",
    },
    {
      icon: <FaRobot size={40} />,
      title: "Smart Environments",
      description:
        "Deploy intelligent ecosystems with real-time monitoring and control.",
      link: "/services#smart",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure Payments",
      description: "Seamless and secure IoT-enabled payment integrations.",
      link: "/services#payments",
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: "Retail Automation",
      description:
        "Revolutionize customer experience with IoT-based retail tech.",
      link: "/services#retail",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <motion.span
                className="subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to IoT Labs
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Innovative <span className="gradient-text">IoT Solutions</span>{" "}
                for a Connected World
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We design and implement cutting-edge IoT technologies to
                transform your business operations and daily life.
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/services" className="btn btn-primary">
                  Our Services <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us <FaArrowRight className="btn-icon" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image"
            >
              <div className="image-container">
                <img
                  src={heroIllustration}
                  alt="IoT Solutions"
                  className="main-image"
                />
                <div className="floating-elements">
                  <motion.div
                    className="element element-1"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img src={iotChip} alt="IoT Chip" />
                  </motion.div>
                  <motion.div
                    className="element element-2"
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img src={smartHome} alt="Smart Home" />
                  </motion.div>
                  <motion.div
                    className="element element-3"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img src={dataAnalytics} alt="Data Analytics" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-description">
              Empowering businesses with innovative IoT solutions that drive
              growth and efficiency
            </p>
          </motion.div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card-wrapper"
              >
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <Link to={service.link} className="service-link">
                    Learn More <FaArrowRight className="link-icon" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="section-footer"
          >
            <Link to="/services" className="btn btn-outline">
              View All Services <FaArrowRight className="btn-icon" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <SectionTitle>Why Choose Us</SectionTitle>
          <div className="features-container">
            <motion.div
              className="features-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <img src={iotDevices} alt="IoT Devices" />
                <div className="image-overlay"></div>
              </div>
            </motion.div>

            <div className="features-list">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="feature-item glass-effect"
              >
                <div className="feature-icon">
                  <FaMicrochip size={24} />
                </div>
                <div className="feature-content">
                  <h3>Cutting-Edge Technology</h3>
                  <p>
                    We use the latest IoT technologies to deliver innovative
                    solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="feature-item glass-effect"
              >
                <div className="feature-icon">
                  <FaShieldAlt size={24} />
                </div>
                <div className="feature-content">
                  <h3>Secure Solutions</h3>
                  <p>
                    Security is our top priority in all IoT implementations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="feature-item glass-effect"
              >
                <div className="feature-icon">
                  <FaRobot size={24} />
                </div>
                <div className="feature-content">
                  <h3>Custom Development</h3>
                  <p>
                    Tailored solutions to meet your specific business needs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
