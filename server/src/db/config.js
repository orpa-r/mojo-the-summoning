// add your database connection here
const {Sequelize} = require("sequelize");
const sequelize = require("../db/config");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "db.sqlite")
});


module.exports = {
    sequelize,
    Sequelize
}