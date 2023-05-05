const { User } = require('./User')
// import the rest of your models above
const { Deck } = require('./User')
const { Card } = require('./User')
const { Attack } = require('./User')

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
