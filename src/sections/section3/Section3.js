import React from "react";

import "./Section3.css";

import events from "../../assets/data/eventsData.js";
import EventCard from "../../components/eventCard/EventCard";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";

const Section3 = () => {
  return (
    <div className="codeutsava__section3" id="events">
      <div className="codeutsava__section3-title">Events</div>
      <div className="codeutsava__section3-events-container">
        <Slider {...sliderSettings} className="slider">
          {events.map((event, key) => (
            <EventCard
              index={key}
              img={event.img}
              title={event.title}
              date={event.date}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3;
