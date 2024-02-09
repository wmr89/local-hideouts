const { Tag } = require("../models");

const tagData = [
    { name: "Relaxed Atmosphere" },
    { name: "Authentic" },
    { name: "middle-of-nowhere"},
    { name: "music"},
    
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
