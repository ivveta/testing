import { thumbWar } from '../thumb-war';
// Namespace import to get getWinner like object method
import * as utils from '../utils';

// если в конфиге jest есть resetMocks: true, то мок затрется и не отработает в тесте
jest.mock('../utils', ()=>(
  {
    getWinner: jest.fn((p1, p2) => p1)
  }
))

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