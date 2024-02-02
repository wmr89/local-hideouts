const { Tag } = require("../models");

const tagData = [{ name: "Relaxed Atmosphere" }];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
