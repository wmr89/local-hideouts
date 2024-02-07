const { Location } = require("../models");

const locationData = [
  {
    name: "Garage on Beck",
    directions: "1199 Beck St, Salt Lake City, UT 84116",
    description:
      "Auto repair shop transformed into a laid-back comfort-food haunt with live music & a garden patio.",
    state_id: 44,
  },
];

const locationData = [
  {
    name: "Caputo's",
    directions: "314 W Broadway, Salt Lake City, UT",
    description:
      "Market and deli that offers regional Italian and Southern European foods....",
    state_id: 44,
  },
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
