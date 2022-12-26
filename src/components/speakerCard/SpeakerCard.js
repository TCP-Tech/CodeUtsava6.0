import React from "react";

import './SpeakerCard.css'

import facebookImg from '../../assets/images/facebook.png'
import twitterImg from '../../assets/images/twitter.png'
import linkedinImg from '../../assets/images/linkedin.png'
import githubImg from '../../assets/images/github.png'

const SpeakerCard = ({img, name, position, description, facebook, twitter, linkedin, github}) => {
  return (
    <div className="codeutsava__section4-speaker-card">
      <img src={img} className="codeutsava__section4-speaker-img" />
      <div className="codeutsava__section4-speaker-menu">
        <h1>{name}</h1>
        <h3>{position}</h3>
        <p>{description}</p>
      </div>
      <div className="codeutsava__section4-speaker-divider"></div>
      <div className="codeutsava__section4-speaker-contact">
        <h3>Contact</h3>
        <div className="codeutsava__section4-speaker-contact-links">
          <a href={facebook}>
            <img src={facebookImg} />
          </a>
          <a href={twitter}>
            <img src={twitterImg} />
          </a>
          <a href={linkedin}>
            <img src={linkedinImg} />
          </a>
          <a href={github}>
            <img src={githubImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;