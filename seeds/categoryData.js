const { Category } = require("../models");

const categoryData = [
  { name: "Bar" },
  { name: "Live Music" },
  { name: "Outdoor Adventure" },
  { name: "Restaurant"},
  { name: "Historic Site"},
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
