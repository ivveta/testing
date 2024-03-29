import { thumbWar } from '../thumb-war';
// Namespace import to get getWinner like object method
import * as utils from '../utils';

// здесь не нужно писать имплиментацию getWinner, так как она берется из __mock__
jest.mock('../utils');

test('returns winner', () => {
  const winner = thumbWar('bmw', 'audi');

  expect(winner).toBe('bmw');
  expect(utils.getWinner.mock.calls).toEqual([
    ['bmw', 'audi'],
    ['bmw', 'audi'],
  ]);

  //cleanup
  utils.getWinner.mockReset();
});
