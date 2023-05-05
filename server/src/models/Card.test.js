const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let card;

beforeAll(async () => {
    await sequelize.sync({ force: true })
    user = await Card.create({ card: 'magic' })
  })
  
  // clear sequelize after tests
  afterAll(async () => await sequelize.sync({ force: true }))
  describe('Card', () => {
    it('has an id', async () => {
      expect(card).toHaveProperty('id')
    })
})