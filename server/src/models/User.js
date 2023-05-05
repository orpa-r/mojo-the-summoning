// create your User model here
let User = sequelize.define("User", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    xp: Sequelize.INTERGER
});

let Deck = sequelize.define("Deck", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    xp: Sequelize.INTERGER
});

let Card = sequelize.define("Card", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    mojo: Sequelize.INTERGER,
    stamina: Sequelize.INTERGER,
    imgUrl: Sequelize.STRING
});

let Attack = sequelize.define("Attack", {
    id: Sequelize.INTERGER,
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTERGER,
    staminaCost: Sequelize.INTERGER
});

module.exports = {
    User,
    Deck,
    Card,
    Attack
};