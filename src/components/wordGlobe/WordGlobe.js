import React from "react";
import { useEffect } from "react";

import "./WordGlobe.css";

import TagCloud from "@frank-mayer/react-tag-cloud";

const WordGlobe = () => {
  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud">
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "fast",
            })}
            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {[
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
            ]}
          </TagCloud>
        </span>
      </div>
    </>
  );
};

export default WordGlobe;
