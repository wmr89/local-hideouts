const { Tag } = require("../models");

const tagData = [
    { name: "Relaxed Atmosphere" },
    { name: "Authentic" },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
