import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/About.css';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    bio: "PhD in Computer Science with 15+ years in AI and machine learning. Leads our R&D initiatives and technical strategy.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of IoT Solutions",
    bio: "Expert in IoT architecture and edge computing. Spearheads our smart city and industrial IoT projects.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Dr. Emily Park",
    role: "Lead Data Scientist",
    bio: "Specializes in predictive analytics and big data solutions. Drives our AI-powered decision-making systems.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  }
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Their AI-powered predictive maintenance system reduced our downtime by 60% and saved us millions in operational costs.",
    author: "James Wilson",
    company: "Global Manufacturing Corp"
  },
  {
    id: 2,
    quote: "The IoT platform they developed transformed our supply chain operations, providing real-time visibility and optimization.",
    author: "Lisa Thompson",
    company: "Smart Logistics Inc"
  },
  {
    id: 3,
    quote: "Their machine learning algorithms revolutionized our customer service, achieving 95% satisfaction rates.",
    author: "David Kim",
    company: "TechRetail Solutions"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ marginTop: '80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering Tomorrow's Technology
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where artificial intelligence meets IoT to create intelligent, connected solutions
            that transform industries and drive innovation forward.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button hero-primary"
            >
              Explore Our Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button hero-secondary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Transforming Industries Section */}
      <section className="company-overview">
        <div className="overview-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overview-content"
          >
            <h3>Transforming Industries with AI & IoT</h3>
            <p>
              We are revolutionizing industries through cutting-edge AI and IoT solutions. 
              Our innovative technologies are reshaping how businesses operate, making them 
              more efficient, sustainable, and future-ready.
            </p>
            <div className="stats-grid">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="stat-item"
              >
                <div className="stat-number">200+</div>
                <div className="stat-label">AI Models Deployed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="stat-item"
              >
                <div className="stat-number">50+</div>
                <div className="stat-label">IoT Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="stat-item"
              >
                <div className="stat-number">99.9%</div>
                <div className="stat-label">System Uptime</div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overview-image"
          >
            <img 
              src="https://images.unsplash.com/photo-1550751827-4d94e0a0c4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="AI and IoT Technology" 
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="mission-values">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp}>Our Core Philosophy</motion.h2>
          </motion.div>

          <div className="values-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mission-card"
            >
              <motion.div variants={fadeInUp} className="mission-icon">
                <i className="fas fa-brain"></i>
              </motion.div>
              <motion.h3 variants={fadeInUp}>Mission</motion.h3>
              <motion.p variants={fadeInUp}>
                To harness the power of artificial intelligence and IoT to create intelligent, connected solutions
                that drive innovation, efficiency, and sustainable growth for businesses worldwide.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="values-card"
            >
              <motion.h3 variants={fadeInUp}>Our Values</motion.h3>
              <motion.ul variants={staggerContainer}>
                <motion.li variants={fadeInUp}>
                  <strong>Innovation:</strong> Constantly pushing technological boundaries
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <strong>Excellence:</strong> Delivering cutting-edge, reliable solutions
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <strong>Collaboration:</strong> Fostering partnerships for success
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <strong>Ethics:</strong> Ensuring responsible AI and data practices
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp}>Meet Our Experts</motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">
              The brilliant minds behind our technological innovations
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="team-grid"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="team-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="team-img-container">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="testimonials-grid"
        >
          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              "Their AI-powered predictive maintenance system reduced our downtime by 60% 
              and saved us millions in operational costs. The implementation was seamless 
              and the results exceeded our expectations."
            </p>
            <div className="client-info">
              <div className="client-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="James Wilson" 
                  loading="lazy"
                />
              </div>
              <div className="client-details">
                <p className="client-name">James Wilson</p>
                <p className="client-company">Global Manufacturing Corp</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              "The IoT platform they developed transformed our supply chain operations, 
              providing real-time visibility and optimization. Their team's expertise 
              and dedication made all the difference."
            </p>
            <div className="client-info">
              <div className="client-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Lisa Thompson" 
                  loading="lazy"
                />
              </div>
              <div className="client-details">
                <p className="client-name">Lisa Thompson</p>
                <p className="client-company">Smart Logistics Inc</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              "Their machine learning algorithms revolutionized our customer service, 
              achieving 95% satisfaction rates. The AI-driven insights have been 
              invaluable for our business growth."
            </p>
            <div className="client-info">
              <div className="client-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="David Kim" 
                  loading="lazy"
                />
              </div>
              <div className="client-details">
                <p className="client-name">David Kim</p>
                <p className="client-company">TechRetail Solutions</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Join the digital revolution with our cutting-edge AI and IoT solutions.
            Let's work together to create a smarter, more efficient future for your business.
          </p>
          <div className="cta-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button cta-primary"
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button cta-secondary"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;