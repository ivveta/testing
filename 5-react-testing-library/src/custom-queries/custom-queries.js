import { queryHelpers, buildQueries } from '@testing-library/react';

const queryAllByClass = (...args) =>
  queryHelpers.queryAllByAttribute('data-src', ...args);

const getMultipleError = (c, className) =>
  `Found multiple elements with the class ${className}`;
const getMissingError = (c, className) =>
  `Unable to find an element with the class ${className}`;

const [queryByClass, getAllByClassTT, getByClass, findAllByClass, findByClass] =
  buildQueries(queryAllByClass, getMultipleError, getMissingError);

export {
  queryByClass,
  queryAllByClass,
  getByClass,
  getAllByClassTT,
  findAllByClass,
  findByClass,
};
