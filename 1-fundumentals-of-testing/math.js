const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

// export {sum, subtract, sumAsync, subtractAsync};
// module.exports - to run with node
module.exports = { sum, subtract, sumAsync, subtractAsync };
