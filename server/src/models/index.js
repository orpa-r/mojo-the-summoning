const { User } = require('./User')
// import the rest of your models above
const { Deck } = require('./Deck')
const { Card } = require('./Card')
const { Attack } = require('./Attack')

//set up the associations here
User.hasOne(Deck);
Deck.hasMany(Card);
Card.hasOne(Deck);
Card.hasMany(Attack);
Attack.belongsToMany(Card);

// and then export them all below
module.exports = { User }
module.exports = { Deck }
module.exports = { Card }
module.exports = { Attack }
