const { sequelize } = require('../db/config.js')

let Card = sequelize.define("Card", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    mojo: Sequelize.INTERGER,
    stamina: Sequelize.INTERGER,
    imgUrl: Sequelize.STRING
});

module.exports = {
    Card
};