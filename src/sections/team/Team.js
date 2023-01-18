import React from "react";

import "./Team.css";

import overAllCoordinaters from "../../assets/data/overAllCoordinatorsData";
import headCoordinaters from "../../assets/data/headCoordinatorsData";
import managers from "../../assets/data/managersData";
import executives from "../../assets/data/executivesData";

import TeamCard from "../../components/teamCard/TeamCard";
import TeamCard2 from "../../components/teamCard2/TeamCard2";
import TeamCard3 from "../../components/teamCard3/TeamCard3";


const Team = () => {
  return (
    <div className="codeutsava__team" id="speakers">
      <div className="codeutsava__team-body">
        <div className="codeutsava__team-main-title">Team TCP</div>
        <div className="codeutsava__team-title">Overall Coordinators</div>
        <div className="codeutsava__team-members">
          {overAllCoordinaters.map((member, index) => (
            <TeamCard3 key={index} img={member.Photo} name={member.Name} position={member.Designation}
             linkedin={member.linkedin} domain={member.Domain}  />
          ))}
        </div>
        <div className="codeutsava__team-title">Head Coordinators</div>
        <div className="codeutsava__team-members">
          {headCoordinaters.map((member, index) => (
            <TeamCard key={index} img={member.Photo} name={member.Name} position={member.Designation}
             linkedin={member.linkedin} domain={member.Domain}  />
          ))}
        </div>
        <div className="codeutsava__team-title">Technical</div>
        <div className="codeutsava__team-desc">The powerhouse website development team creating platform for representing our initiatives, events & workshops, ensuring a great interface between participants and our team.</div>
        <div className="codeutsava__team-members">
          {managers.map((member, index) => (
            <TeamCard key={index} img={member.Photo} name={member.Name} position={member.Designation}
             linkedin={member.linkedin} domain={member.Domain}  />
          ))}
        {/* </div> */}
        {/* <div className="codeutsava__team-title">Executives</div> */}
        {/* <div className="codeutsava__team-members"> */}
          {executives.map((member, index) => (
            <TeamCard key={index} img={member.Photo} name={member.Name} position={member.Designation}
             linkedin={member.linkedin} domain={member.Domain}  />
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default Team;