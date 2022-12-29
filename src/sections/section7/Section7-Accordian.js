import React from "react";
import { useState } from "react";
import { faqs } from "./faqs";
import AccordionItem from "./Section7-AccordianItem"
const Accordion = () => {
    const [clicked, setClicked] = useState("0");
   
    const handleToggle = (index) => {
     if (clicked === index) {
      return setClicked("0");
     }
     setClicked(index);
    };
   
    return (
     <ul className="section7-accordion">
      {faqs.map((faq, index) => (
       <AccordionItem
        onToggle={() => handleToggle(index)}
        faq = {faq}
       />
      ))}
     </ul>
    );
};
   
   export default Accordion;