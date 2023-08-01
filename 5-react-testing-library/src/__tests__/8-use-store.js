import { Counter } from '../8-use-store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../8-use-store/store';

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );

  userEvent.click(screen.getByText('+'));

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');
});
