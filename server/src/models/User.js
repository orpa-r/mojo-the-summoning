// create your User model here
let User = sequelize.define("User", {
    id: Sequelize.INTERGER,
    name: Sequelize.STRING,
    xp: Sequelize.INTERGER
});

module.exports = {
    User
};