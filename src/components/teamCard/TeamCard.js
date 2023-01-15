import React from "react";

import "./TeamCard.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TeamCard = ({
  img,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  github,
}) => {
  return (
    <div className="codeutsava__team-card">
      <div className="codeutsava__team-card-img">
        <img src="https://picsum.photos/130/130?image=836" />
      </div>
      <div className="codeutsava__team-card-content">
        <h3 className="name">{name}</h3>
        <h4 className="title">{position}</h4>
      </div>
      <ul className="social">
        <li>
          <a href="" className="fa fa-facebook" aria-hidden="true"></a>
        </li>
        <li>
          <a href="" className="fa fa-twitter" aria-hidden="true"></a>
        </li>
        <li>
          <a href="" className="fa fa-github" aria-hidden="true"></a>
        </li>
        <li>
          <a href="" className="fa fa-linkedin" aria-hidden="true"></a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
