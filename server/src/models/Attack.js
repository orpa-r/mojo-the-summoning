let Attack = sequelize.define("Attack", {
    id: Sequelize.INTERGER,
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTERGER,
    staminaCost: Sequelize.INTERGER
});

module.exports = {
    Attack
};