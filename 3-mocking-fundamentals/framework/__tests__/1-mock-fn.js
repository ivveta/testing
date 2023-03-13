// мок функции для примера
// удобнее использовать spy, так как в нем есть метод для рестора мока

import { thumbWar } from '../thumb-war';
// Namespace import to get getWinner like object method
import * as utils from '../utils';

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('bmw', 'audi')

  expect(winner).toBe('bmw');
  expect(utils.getWinner.mock.calls).toEqual(
    [[ 'bmw', 'audi' ],
      [ 'bmw', 'audi' ]]
  );

  // toHaveBeenCalledTimes - для примера, предыдущий тест проверяет кол-во вызовов
  expect(utils.getWinner).toHaveBeenCalledTimes(2);

  //cleanup
  utils.getWinner = originalGetWinner;
})