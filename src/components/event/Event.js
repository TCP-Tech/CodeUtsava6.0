import React, { Component } from "react";
import "./Event.css";
import file5 from '../../assets/images/file5.png';
export default class Event extends Component {
  render() {
    return(
        <div className="codeutsava__event-card">
        <div className="codeutsava__event-image">
          <img class="codeutsava__event-image-element" src={file5}></img>
        </div>
        <div className="codeutsava__event-cardtitle">Coding Contest</div>
        <div className="codeutsava__event-line"></div>
        <div className="codeutsava__event-carddetails">14th February</div>
      </div>
    )
  }
}
