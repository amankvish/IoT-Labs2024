import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link to={link} className="card-link">
        Learn More <span>&rarr;</span>
      </Link>
      <div className="card-hover-effect"></div>
    </div>
  );
};

export default Card;