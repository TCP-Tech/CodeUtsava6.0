import sponser1 from "../images/sponsers/sponser1.png";
import sponser2 from "../images/sponsers/sponser2.png";
import sponser3 from "../images/sponsers/sponser3.svg";
import sponser4 from "../images/sponsers/sponser4.png";
import sponser5 from "../images/sponsers/sponser5.png";
import sponser6 from "../images/sponsers/sponser6.png";
import sponser7 from "../images/sponsers/sponser7.png";

const platinum = [
  {
    img: sponser1,
  },
  {
    img: sponser2,
  },
  {
    img: sponser3,
  },
  {
    img: sponser2,
  },
  {
    img: sponser3,
  }, //repeated to show wrapping 
];

const gold = [
  {
    img: sponser4,
  },
];

const silver = [
  {
    img: sponser5,
  },
  {
    img: sponser6,
  },
  {
    img: sponser7,
  },
  {
    img: sponser6,
  },
  {
    img: sponser7,
  },
  {
    img: sponser5,
  }, // repeated to show wrapping
];

const bronze = [
    {
      img: sponser6,
    },
    {
      img: sponser7,
    },
    {
      img: sponser5,
    }, // repeated to show wrapping
  ];

const sponsers = { platinum, gold, silver, bronze };

export default sponsers;
