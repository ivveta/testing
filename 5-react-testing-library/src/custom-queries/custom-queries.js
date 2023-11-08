import { queryHelpers, buildQueries } from '@testing-library/react';

const queryAllByClass = (...args) =>
  queryHelpers.queryAllByAttribute('class', ...args);

const getMultipleError = (c, className) =>
  `Found multiple elements with the class ${className}`;
const getMissingError = (c, className) =>
  `Unable to find an element with the class ${className}`;

const [queryByClass, getAllByClass, getByClass] = buildQueries(
  queryAllByClass,
  getMultipleError,
  getMissingError,
);

export { queryByClass, queryAllByClass, getByClass, getAllByClass };
