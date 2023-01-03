import React from 'react'
import { useState } from 'react'

import './ProblemCard.css'
import ProblemModal from '../problemModal/ProblemModal'

const ProblemCard = ({img,title,statement}) => {

  const [modal, setModal] = useState(false);
  const [problem, setProblem] = useState([]);

  const getProblem = (img, title, statement) => {
    let temp = [img, title, statement]
    setProblem(item => [1, ...temp])
    return setModal(true)
  }

  document.body.style.overflowY = !modal ? 'scroll' : 'hidden';

  return (
    <div className="codeutsava__section8-card-body">
      <div className="codeutsava__section8-card">
          <img class='codeutsava__section8-image' src={img} onClick={() => getProblem(img, title, statement)}></img>
          <div className="codeutsava__section8-cardtitle">
              {title}
          </div>
          <div className="codeutsava__section8-line">
          </div>
          <div className="codeutsava__section8-carddetails">
              {statement}
          </div>
      </div>
      {
        modal === true ? <ProblemModal img={img} title={title} statement={statement} hide={() => setModal(false)}/> : ''
      }
    </div>
  )
}

export default ProblemCard