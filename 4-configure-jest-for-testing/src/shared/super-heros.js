const superHeros = [
  {name: 'Dynagay', powers: ['disintegration ray', 'fly']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Blazestone', powers: ['control of fire', 'pyrotechnic discharges']},
  {name: 'Frozone', powers: ['freeze water']},
]

function getFlyingSuperHeros() {
  return superHeros.filter(hero => {
    return hero.powers.includes('fly')
  })
}

export {getFlyingSuperHeros}