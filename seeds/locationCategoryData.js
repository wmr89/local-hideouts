const { LocationCategory } = require("../models");

const locationCategoryData = [{ location_id: 1, category_id: 1 }];

const seedLocationCategories = () =>
  LocationCategory.bulkCreate(locationCategoryData);

module.exports = seedLocationCategories;
