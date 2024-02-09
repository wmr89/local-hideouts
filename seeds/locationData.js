const { Location } = require("../models");

const locationData = [
  {
    name: "Garage on Beck",
    directions: "1199 Beck St, Salt Lake City, UT 84116",
    description:
      "Auto repair shop transformed into a laid-back comfort-food haunt with live music & a garden patio.",
    state_id: 44,
  },  
  {
    name: "Caputo's",
    directions: "314 W Broadway, Salt Lake City, UT",
    description:
      "Market and deli that offers regional Italian and Southern European foods",
    state_id: 44,
  },
  {
    name: "The Drops",
    directions: "42.97490654405323, -114.41757347287066",
    description:
      "The drops is canal and bridge jumping location. Jump from the bridge and float down the rapids. A life jacket is a smart choice and make sure to get out at the pull out spot! CAUTION: Like many adventures there is danger, recreate carefully!",
    state_id: 12,
  },
  {
    name: "Pickle Butte",
    directions: "8592 Perch Rd, Caldwell, ID 83607",
    description:
      "Pickle Butte is a great place to ride ATVs. There is even a nice FREE public shooting range near by.",
    state_id: 12,
  },
  {
    name: "Knitting Factory",
    directions: "416 S 9th St, Boise, ID 83702",
    description:
      "Spacious outpost of a small national concert venue chain with an attached adults-only restaurant.",
    state_id: 12,
  },
  {
    name: "Revolution Concert House",
    directions: "4983 N Glenwood St, Garden City, ID 83714",
    description:
      "The best smaller venue in the treasure valley",
    state_id: 12,
  },
  {
    name: "Garnet Ghost Town",
    directions: "46.82673196697762, -113.33611775076945",
    description:
      "Montana's most intact ghost town! A well preserved 1890s gold-mining ghost town town. It has log cabins, a saloon, a hotel, and more!",
    state_id: 26,
  },
];


const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
