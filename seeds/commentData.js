const { Comment } = require("../models");

const commentData = [
  { body: "This place was awesome", user_id: 1, location_id: 1 },
  { body: "Bring a few dollar bills to pay for parking", user_id: 1, location_id: 7 },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
