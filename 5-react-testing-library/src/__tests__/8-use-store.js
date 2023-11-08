import { Counter } from '../8-use-store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore, store } from '../8-use-store/store';

const renderWithProvider = (
  ui,
  { initialState, store = setupStore(initialState), ...options } = {},
) => {
  return render(<Provider store={store}>{ui}</Provider>, options);
};
test('can render with redux with defaults', () => {
  renderWithProvider(<Counter />);

  userEvent.click(screen.getByText('+'));

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');
});

test('can render with redux with custom initial state', () => {
  const initialState = { counter: { count: 3 } };

  renderWithProvider(<Counter />, { initialState });

  userEvent.click(screen.getByText('-'));

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2');
});
