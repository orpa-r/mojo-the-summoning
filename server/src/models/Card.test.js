const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let card;

