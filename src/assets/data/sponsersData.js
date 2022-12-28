import sponser1 from "../images/file10.png";
import sponser2 from "../images/file11.png";
import sponser3 from "../images/file12.png";
import sponser4 from "../images/file13.png";
import sponser5 from "../images/file14.png";
import sponser6 from "../images/file15.png";
import sponser7 from "../images/file16.png";

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
