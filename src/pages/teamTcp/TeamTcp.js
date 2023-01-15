import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './TeamTcp.css';
import '../../App.css';
import Team from '../../sections/team/Team';
export default class TeamTcp extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto">
          <Team/>
        </div>
      </>
    )
  }
}
