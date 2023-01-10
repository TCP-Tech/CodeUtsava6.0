import React from "react";

import "./ProblemModal.css";
import cross from '../../assets/images/cross.png'

const ProblemModal = ({img, title, statement, hide}) => {

  return (
    <div className="codeutsava__section8-problemModal-body line-animation">
            <img className="problemModal-close" onClick={hide} src={cross}/>
            <h1>{title}</h1>
            <p>{statement}</p>
            <img src={img} />
    </div>
  );
};

export default ProblemModal;
