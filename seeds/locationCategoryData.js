const { LocationCategory } = require("../models");

const locationCategoryData = [
  { location_id: 1, category_id: 1 },
  { location_id: 1, category_id: 4 },
  { location_id: 2, category_id: 4 },
  { location_id: 3, category_id: 3},
  { location_id: 4, category_id: 3},
  { location_id: 5, category_id: 2},
  { location_id: 6, category_id: 2},
  { location_id: 7, category_id: 5},
];

const seedLocationCategories = () =>
  LocationCategory.bulkCreate(locationCategoryData);

module.exports = seedLocationCategories;
