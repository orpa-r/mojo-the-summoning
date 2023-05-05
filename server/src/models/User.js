// create your User model here
const { sequelize } = require('../db/config.js')

let User = sequelize.define("User", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    xp: Sequelize.INTERGER
});

module.exports = {
    User
};