import React from 'react'
import { useEffect } from 'react'

import './WordGlobe.css'

import TagCloud from "TagCloud"

const WordGlobe = () => {

    useEffect(() => {
        return () => {
        const container='.tagcloud'
        const texts = [
            "HTML",
            "CSS",
            "JavaScript",
            "ReactJs",
            "NodeJs",
            "Python",
            "Django",
            "SQL",
            "ExpressJs",
            "Figma",
            "CodeEase",
            "Hackathon",
            "PassCode",
            "Quiz",
        ]

        const options = {
            radius: 300,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: "true",
        }

        TagCloud(container,texts,options)
    }},[])
  return (
    <>
        <div className="text-sphere">
            <span className="tagcloud"></span>
        </div>
    </>
  )
}

export default WordGlobe