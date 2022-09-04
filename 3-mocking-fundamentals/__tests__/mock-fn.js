const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('bmw', 'audi')
  expect(winner).toBe('bmw')
  expect(utils.getWinner.mock.calls).toEqual( [[ 'bmw', 'audi' ], [ 'bmw', 'audi' ]])

  //cleanup
  utils.getWinner = originalGetWinner
})