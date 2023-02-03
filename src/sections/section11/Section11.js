import React from "react";

import "./Section11.css";

import funEvents from "../../assets/data/funEventsData";
import EventCard from "../../components/eventCard/EventCard";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";
import { motion } from "framer-motion";
import FunEventCard from "../../components/funEventCard/FunEventCard";

const Section11 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section11"
      id="funEvents"
    >
      <div className="codeutsava__section11-title">Fun Events</div>
      <div className="codeutsava__section11-events-container">
        <Slider {...sliderSettings} className="slider">
          {funEvents.map((event, key) => (
            <FunEventCard
              index={key}
              img={event.img}
              title={event.title}
              date={event.date}
              link={event.link}
              venue={event.venue}
            />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Section11;
