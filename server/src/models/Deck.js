const { sequelize } = require('../db/config.js')

let Deck = sequelize.define("Deck", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    xp: Sequelize.INTERGER
});

module.exports = {
    Deck
};