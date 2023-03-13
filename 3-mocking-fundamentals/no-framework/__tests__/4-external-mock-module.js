require('../__no-framework-mocks__/utils');
const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('bmw', 'audi');
assert.strictEqual(winner, 'bmw');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['bmw', 'audi'],
  ['bmw', 'audi'],
]);

//cleanup
delete require.cache[utilsPath];
