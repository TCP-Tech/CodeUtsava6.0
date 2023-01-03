import React from "react";
import { useState } from "react";
import { faqs } from "./faqs";
import AccordionItem from "./Section7-AccordianItem"
const Accordion = () => {
    const [activeAccordian, setActiveAccordian] = useState(null);
   
    const handleToggle = (index) => {
     if (activeAccordian === index) {
      return setActiveAccordian(null);
     }
     setActiveAccordian(index);
    };
   
    return (
     <ul className="section7-accordion">
      {faqs.map((faq, index) => (
       <AccordionItem
        onToggle={() => handleToggle(index)}
        faq = {faq}
        isActive = {index===activeAccordian}
       />
      ))}
     </ul>
    );
};
   
   export default Accordion;
