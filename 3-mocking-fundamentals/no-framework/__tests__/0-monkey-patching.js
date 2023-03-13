// node 3-mocking-fundamentals/no-framework/__tests__/0-monkey-patching.js

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;
// мок - переопределили функцию
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('bmw', 'audi');

assert.equal(winner, 'bmw');
console.log('isPassing: ', winner === 'bmw');

// не забыть почистить обратно переопределение функции, чтобы не зааффектить другие тесты
utils.getWinner = originalGetWinner;
