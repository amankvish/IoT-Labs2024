import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaInstagram />, url: "#" }
  ];

  return (
    <footer className="footer-modern">
      <motion.div 
        className="footer-inner container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg" alt="IoT Labs" />
            <span>IoT Labs</span>
          </Link>
          <p>Innovating the future with cutting-edge IoT solutions.</p>
          <div className="footer-social">
            {socialLinks.map((social, idx) => (
              <motion.a 
                key={idx} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="animated-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} IoT Labs. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
