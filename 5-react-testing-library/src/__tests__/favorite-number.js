import { render, screen } from '@testing-library/react';
import { FavoriteNumber } from '../favorite-number';
import user from '@testing-library/user-event';

test('renders a number input with a label "Favorite Number"', () => {
  const { debug } = render(<FavoriteNumber />);

  const input = screen.getByLabelText(/favorite number/i);

  // just for test
  debug(input);

  expect(input).toHaveAttribute('type', 'number');
});

test('entering an invalid value shows an error message', () => {
  const { rerender, debug } = render(<FavoriteNumber />);

  const input = screen.getByLabelText(/favorite number/i);
  user.type(input, '10');

  const alert = screen.getByRole('alert');

  expect(alert).toHaveTextContent(/the number is invalid/i);
  rerender(<FavoriteNumber max={10} />);

  // to verified element is not rendered use query
  expect(screen.queryByRole('alert')).toBeNull();
});
