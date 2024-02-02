const { LocationTag } = require("../models");

const locationTagData = [{ location_id: 1, category_id: 1 }];

const seedLocationTags = () => LocationTag.bulkCreate(locationTagData);

module.exports = seedLocationTags;
