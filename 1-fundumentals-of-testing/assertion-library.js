// import {sum, subtract} from "./math";
// require - to run with node
const { sum, subtract, sumAsync, subtractAsync } = require('./math');

const test = async (title, callback) => {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.error(error);
  }
};

const expect = (result) => ({
  toBe(expected) {
    if (result !== expected) {
      throw new Error(`${result} is not equal to ${expected}`);
    }
  },
  toBeGreaterThen() {},
});

test('sum: adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test('subtract: subtract numbers', () => {
  const result = subtract(3, 7);
  const expected = -4;

  expect(result).toBe(expected);
});

test('sumAsync: adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7);
  const expected = 6;

  expect(result).toBe(expected);
});
