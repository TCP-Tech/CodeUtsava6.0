import React, { Component } from 'react'
import './Section3.css';
import file5 from '../../assets/images/file5.png';

export default class Section1 extends Component {
  render() {
    return (
    <div className="codeutsava__section3" id="events">
        <div className="codeutsava__section3-body">
            <div className="codeutsava__section3-title">
                Events
            </div>
            <div className="codeutsava__section3-menu">
                <div className="codeutsava__section3-card">
                    <div className="codeutsava__section3-image">
                        <img class='codeutsava__section3-image-element' src={file5}></img>
                    </div>
                    <div className="codeutsava__section3-cardtitle">
                        Coding Contest
                    </div>
                    <div className="codeutsava__section3-line">
                    </div>
                    <div className="codeutsava__section3-carddetails">
                        14th February
                    </div>
                </div>
                <div className="codeutsava__section3-card">
                    <div className="codeutsava__section3-image">
                        <img class='codeutsava__section3-image-element' src={file5}></img>
                    </div>
                    <div className="codeutsava__section3-cardtitle">
                        Coding Contest
                    </div>
                    <div className="codeutsava__section3-line">
                    </div>
                    <div className="codeutsava__section3-carddetails">
                        14th February
                    </div>
                </div>
                <div className="codeutsava__section3-card card-hidden">
                    <div className="codeutsava__section3-image">
                        <img class='codeutsava__section3-image-element' src={file5}></img>
                    </div>
                    <div className="codeutsava__section3-cardtitle">
                        Coding Contest
                    </div>
                    <div className="codeutsava__section3-line">
                    </div>
                    <div className="codeutsava__section3-carddetails">
                        14th February
                    </div>
                </div>
                <div className="codeutsava__section3-card card-hidden">
                    <div className="codeutsava__section3-image">
                        <img class='codeutsava__section3-image-element' src={file5}></img>
                    </div>
                    <div className="codeutsava__section3-cardtitle">
                        Coding Contest
                    </div>
                    <div className="codeutsava__section3-line">
                    </div>
                    <div className="codeutsava__section3-carddetails">
                        14th February
                    </div>
                </div>
            </div>
            <div className="codeutsava__section3-slider">
                <div className="larr">&larr;</div>
                <div className="rarr">&rarr;</div>
            </div>
        </div>
    </div>
    )
  }
}
