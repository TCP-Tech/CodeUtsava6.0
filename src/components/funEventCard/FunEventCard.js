import React from "react";

import "./FunEventCard.css";
import { Link } from "react-router-dom";

const FunEventCard = ({ img, title, date, link,venue }) => {
  return (
    <div className="codeutsava__section11-card">
      <a href={link} target="_blank">
        <img className="codeutsava__section11-image" src={img} alt=""/>
      </a>
      <div className="codeutsava__section11-cardTitle">{title}</div>
      <div className="codeutsava__section11-divider"></div>
      <div className="codeutsava__section11-details">Date and Time : {date}</div>
      <div className="codeutsava__section11-details">Venue : {venue}</div>
      <button className="codeutsava__section11-button">
          <Link to={link}>Register Now</Link>
        </button>
    </div>
  );
};

export default FunEventCard;
