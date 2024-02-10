const { LocationTag } = require("../models");

const locationTagData = [
    { location_id: 1, tag_id: 1 },
    { location_id: 2, tag_id: 2 },
    { location_id: 7, tag_id: 2 },
    { location_id: 3, tag_id: 3 },   
    { location_id: 4, tag_id: 3 },
    { location_id: 5, tag_id: 4 },
    { location_id: 6, tag_id: 4 },
    

    
];

const seedLocationTags = () => LocationTag.bulkCreate(locationTagData);

module.exports = seedLocationTags;
