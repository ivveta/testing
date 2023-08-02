import { Counter } from '../8-use-store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../8-use-store/store';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../8-use-store/slice';

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );

  userEvent.click(screen.getByText('+'));

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');
});

test('can render with redux with custom initial state', () => {
  const customStore = configureStore({
    reducer: {
      counter: counterSlice,
    },
    preloadedState: { counter: { count: 3 } },
  });

  render(
    <Provider store={customStore}>
      <Counter />
    </Provider>,
  );

  userEvent.click(screen.getByText('-'));

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2');
});
