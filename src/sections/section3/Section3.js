import React, { Component } from 'react'
import './Section3.css';
import Event from '../../components/event/Event';

export default class Section1 extends Component {
  render() {
    return (
    <div className="codeutsava__section3" id="events">
        <div className="codeutsava__section3-body">
            <div className="codeutsava__section3-title">
                Events
            </div>
            <div className="codeutsava__section3-menu">
                <Event/>
                <Event/>
                <Event/>
                <Event/>
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
