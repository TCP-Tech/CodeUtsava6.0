import { useState } from "react";
import { useRef } from "react";

const AccordionItem = ({ faq }) => {

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`section7-accordion_item ${clicked ? "active" : ""}`}>
      <button className="section7-button" onClick={handleToggle}>
        {question}
        <span className="section7-control">{clicked ? "—" : "+"} </span>
      </button>

      <div
        ref={contentEl}
        className="section7-answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="section7-answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;