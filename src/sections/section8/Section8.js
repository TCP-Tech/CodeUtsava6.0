import React from "react";
import { useState } from "react";

import "./Section8.css";

import problems from "../../assets/data/problemsData.js";
import ProblemCard from "../../components/problemCard/ProblemCard";

const initialProblem = 2

const Section8 = () => {
  const [next, setNext] = useState(initialProblem);
  const handleMoreProblems = () => {
    setNext(problems.length);
  };
  const handleLessProblems = () => {
    setNext(initialProblem);
  };
  console.log(next);
  return (
    <div className="codeutsava__section8" id="problems">
      <div className="codeutsava__section8-body">
        <div className="codeutsava__section8-title">Problem Statements</div>
        <div className="codeutsava__section8-problems">
          <div className="codeutsava__section8-problems-container">
            {problems.slice(0,next).map((problem, index) => (
              <ProblemCard key={index}
                img={problem.img}
                title={problem.title}
                statement={problem.statement}
              />
            ))}
          </div>
        </div>
        {
            next<problems.length ? (
                <button
            className="codeutsava__section8-button"
            onClick={handleMoreProblems}
          >
            Load more
          </button>
            ) : <button
            className="codeutsava__section8-button"
            onClick={handleLessProblems}
          >
            Show less
          </button>
        }
      </div>
    </div>
  );
};

export default Section8;
