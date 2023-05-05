// add your database connection here
const db;
const {Sequelize} = require("sequelize");
const sequelize = require("../db/config");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "db.sqlite")
});


module.exports = {
    db,
    sequelize,
    Sequelize
}