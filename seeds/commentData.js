const { Comment } = require("../models");

const commentData = [
  { body: "This place was awesome", user_id: 1, location_id: 1 },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
