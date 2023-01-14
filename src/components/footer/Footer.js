import React from 'react'

import './Footer.css'

import NIT from '../../assets/images/NIT.svg'
import tcpName from '../../assets/images/tcpName.svg'
import codeutsava from '../../assets/images/codeutsava.png'

import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import github from '../../assets/images/github.svg'
import instagram from '../../assets/images/instagram.svg'
import linkedin from '../../assets/images/linkedin.svg'

const Footer = () => {
  return (
    <div className="codeutsava__footer" id="contactus">
        <div className="codeutsava__footer-body">
            <div className="codeutsava__footer-main">
                <div className="codeutsava__footer-left">
                    <div className="codeutsava__footer-left-container1">
                        <img src={codeutsava}/>
                        <img src={NIT}/>
                    </div>
                    <div className="codeutsava__footer-left-container2">
                        <img src={tcpName}/>
                    </div>
                </div>
                <div className="codeutsava__footer-right">
                    <div className="codeutsava__footer-right-container">
                        <div className="codeutsava__footer-right-title">
                            Contact Us
                        </div>
                        <div className="codeutsava__footer-right-content">
                            <ul>
                                <li>
                                    <a>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Activity
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Discover
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Learn More
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="codeutsava__footer-right-container">
                        <div className="codeutsava__footer-right-title">
                            Company
                        </div>
                        <div className="codeutsava__footer-right-content">
                            <ul>
                                <li>
                                    <a>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="codeutsava__footer-right-container">
                        <div className="codeutsava__footer-right-title">
                            Contact
                        </div>
                        <div className="codeutsava__footer-right-content">
                            <ul>
                                <li>
                                    <a>
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="codeutsava__footer-divider"></div>
            <div className="codeutsava__footer-social">
                <div className="codeutsava__footer-social-container">
                    <a href="#" target="_blank">
                        <img src={facebook}/>
                    </a>
                    <a href="#" target="_blank">
                        <img src={instagram}/>
                    </a>
                    <a href="#" target="_blank">
                        <img src={github}/>
                    </a>
                    <a href="#" target="_blank">
                        <img src={linkedin}/>
                    </a>
                    <a href="#" target="_blank">
                        <img src={twitter}/>
                    </a>
                </div>
                <div className="codeutsava__footer-social-team">
                    Architected with  ❤️  by <a href="/team">TCP Team</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer