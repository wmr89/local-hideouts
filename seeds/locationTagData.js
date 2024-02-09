const { LocationTag } = require("../models");

const locationTagData = [
    { location_id: 1, tag_id: 1 },
    { location_id: 2, tag_id: 2 },
];

const seedLocationTags = () => LocationTag.bulkCreate(locationTagData);

module.exports = seedLocationTags;
