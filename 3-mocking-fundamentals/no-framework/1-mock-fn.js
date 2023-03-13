const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(impl){
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args)
  }

  mockFn.mock = {calls: []}
  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1);

const winner = thumbWar('bmw', 'audi')
assert.strictEqual(winner, 'bmw')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  [ 'bmw', 'audi' ],
  [ 'bmw', 'audi' ]
])

//cleanup
utils.getWinner = originalGetWinner
