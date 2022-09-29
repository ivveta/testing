import {getFlyingSuperHeros} from '../super-heros'

test('returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperHeros()

  expect(flyingHeros).toMatchInlineSnapshot(`
[
  {
    "name": "Dynagay",
    "powers": [
      "disintegration ray",
      "fly",
    ],
  },
  {
    "name": "Apogee",
    "powers": [
      "gravity control",
      "fly",
    ],
  },
  {
    "name": "Jack-Jack",
    "powers": [
      "shapeshifting",
      "fly",
    ],
  },
]
`)
})