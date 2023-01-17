import React from 'react'

import './Section10.css';

import {Link} from 'react-router-dom'

const section10 = () => {
  return (
    <div className="codeutsava__section10" id="my-team">
    <div className="codeutsava__section10-body">
      <div className="codeutsava__section10-title">Wondering who all make this possible?</div>
      <button
          className="codeutsava__section10-button"><Link to="/team">Meet our Team</Link>
        </button>
      </div>
      </div>
  )
}

export default section10
