const { LocationCategory } = require("../models");

const locationCategoryData = [
  { location_id: 1, category_id: 1 },
  { location_id: 2, category_id: 4 },
];

const seedLocationCategories = () =>
  LocationCategory.bulkCreate(locationCategoryData);

module.exports = seedLocationCategories;
