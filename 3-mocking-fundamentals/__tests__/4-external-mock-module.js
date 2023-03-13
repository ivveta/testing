const thumbWar = require('../thumb-war')
const utils = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('bmw', 'audi')

  expect(winner).toBe('bmw')
  expect(utils.getWinner.mock.calls).toEqual(
    [[ 'bmw', 'audi' ],
      [ 'bmw', 'audi' ]]
  )

  //cleanup
  utils.getWinner.mockReset()
})