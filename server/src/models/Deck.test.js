const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let deck;



