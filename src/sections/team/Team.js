import React from "react";

import "./Team.css";

import overAllCoordinaters from "../../assets/data/overAllCoordinatorsData";
import headCoordinaters from "../../assets/data/headCoordinatorsData";
import managers from "../../assets/data/managersData";
import executives from "../../assets/data/executivesData";

import TeamCard from "../../components/teamCard/TeamCard";

const Team = () => {
  return (
    <div className="codeutsava__team" id="speakers">
      <div className="codeutsava__team-body">
        <div className="codeutsava__team-main-title">Team TCP</div>
        <div className="codeutsava__team-title">Overall Coordinators</div>
        <div className="codeutsava__team-members">
          {overAllCoordinaters.map((member, index) => (
            <TeamCard key={index} img={member.img} name={member.name} position={member.position}
             linkedin={member.linkedin}  />
          ))}
        </div>
        <div className="codeutsava__team-title">Head Coordinators</div>
        <div className="codeutsava__team-members">
          {headCoordinaters.map((member, index) => (
            <TeamCard key={index} img={member.img} name={member.name} position={member.position}
             linkedin={member.linkedin}  />
          ))}
        </div>
        <div className="codeutsava__team-title">Managers</div>
        <div className="codeutsava__team-members">
          {managers.map((member, index) => (
            <TeamCard key={index} img={member.img} name={member.name} position={member.position}
             linkedin={member.linkedin}  />
          ))}
        </div>
        <div className="codeutsava__team-title">Executives</div>
        <div className="codeutsava__team-members">
          {executives.map((member, index) => (
            <TeamCard key={index} img={member.img} name={member.name} position={member.position}
             linkedin={member.linkedin}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;