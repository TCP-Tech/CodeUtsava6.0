import React, { Component } from "react";
import "./Section1.css";
import codeutsavaTitle from "../../assets/images/codeutsavaTitle.svg";
import discord from "../../assets/images/discord.svg";

export default class Section1 extends Component {
  render() {
    return (
      <div className="codeutsava__section1" id="home">
        <div className="codeutsava__section1-body">
          <div className="codeutsava__section1-menu">
            <div className="codeutsava__section1-heading">Welcome To</div>
            <div className="codeutsava__section1-image">
              <img src={codeutsavaTitle}></img>
            </div>
            <div className="codeutsava__section1-subheading">
              Code. Innovate. Celebrate.
            </div>
            <div className="codeutsava__section1-para">
              Central India's{" "}
              <span style={{ fontWeight: "600" }}>Largest Coding Event.</span>{" "}
              Join Us on [Dates].
            </div>
          </div>
          <div className="codeutsava__section1-button-container">
            
            <div className="codeutsava__section1-discord">
              <a className="codeutsava__section1-discord-link">
                <img src={discord}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
