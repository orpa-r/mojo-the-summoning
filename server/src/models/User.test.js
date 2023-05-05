const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let user;

// clear sequelize and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear sequelize after tests
afterAll(async () => await sequelize.sync({ force: true }))
describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
})

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
afterAll(async () => await sequelize.sync({ force: true}))

describe('User', () => {
  it('checks if username is gandalf', async () => {
    expect(user.username).toBe('gandalf') 
  })
})


