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

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
