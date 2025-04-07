import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <header className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Link to="/">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg" 
              alt="IoT Labs Logo" 
            />
            <span>IoT Labs</span>
          </Link>
        </motion.div>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
                <span className="link-underline"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div 
          className="hamburger" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? (
            <FaTimes size={26} className="menu-icon" />
          ) : (
            <FaBars size={26} className="menu-icon" />
          )}
        </motion.div>
      </div>

      {/* Mobile Overlay (optional effect) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
