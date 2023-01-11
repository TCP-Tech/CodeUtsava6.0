import React from "react";

import './SpeakerCard.css'

import facebookImg from '../../assets/images/facebook.svg'
import twitterImg from '../../assets/images/twitter.svg'
import linkedinImg from '../../assets/images/linkedin.svg'
import githubImg from '../../assets/images/github.svg'

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
          <a className="codeutsava__section4-speaker-contact-links-image" href={facebook}>
            <img src={facebookImg} />
          </a>
          <a className="codeutsava__section4-speaker-contact-links-image" href={twitter}>
            <img src={twitterImg} />
          </a>
          <a className="codeutsava__section4-speaker-contact-links-image" href={linkedin}>
            <img src={linkedinImg} />
          </a>
          <a className="codeutsava__section4-speaker-contact-links-image" href={github}>
            <img src={githubImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;