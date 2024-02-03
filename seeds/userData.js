const { User } = require("../models");

const userData = [
  {
    username: "awesomeDave",
    email: "daveisawesome@email.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
