const seedStates = require("./stateData");
const seedLocations = require("./locationData");
const seedLocationCategories = require("./locationCategoryData");
const seedLocationTags = require("./locationTagData");
const seedUsers = require("./userData");
const seedCategories = require("./categoryData");
const seedTags = require("./tagData");
const seedComments = require("./commentData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedStates();
  console.log("\n----- STATES SEEDED -----\n");

  await seedLocations();
  console.log("\n----- LOCATIONS SEEDED -----\n");

  await seedCategories();
  console.log("\n----- USERS SEEDED -----\n");

  await seedTags();
  console.log("\n----- Tags SEEDED -----\n");

  await seedLocationCategories();
  console.log("\n----- LOCATION CATEGORIES SEEDED -----\n");

  await seedLocationTags();
  console.log("\n----- LOCATION TAGS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedComments();
  console.log("\n----- Comments SEEDED -----\n");

  process.exit(0);
};

seedAll();
