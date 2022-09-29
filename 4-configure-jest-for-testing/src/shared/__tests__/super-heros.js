import {getFlyingSuperHeros} from '../super-heros'

test('returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperHeros()

  expect(flyingHeros).toEqual([
    {"name": "Dynagay", "powers": ["disintegration ray", "fly"]},
    {"name": "Apogee", "powers": ["gravity control", "fly"]}
  ])
})