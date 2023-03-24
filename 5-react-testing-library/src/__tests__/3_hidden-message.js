import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HiddenMessage } from '../hidden-message';
// import { wait } from '@testing-library/user-event/dist/utils';

// mock, чтобы не ждать timeout
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: (props) => (props.in ? props.children : null),
  };
});

// test('shows hidden message when toggle is clicked', async () => {
test('shows hidden message when toggle is clicked', () => {
  const message = 'My message';

  const { debug } = render(<HiddenMessage>{message}</HiddenMessage>);
  const toggleButton = screen.getByRole('button');

  expect(screen.queryByText(message)).not.toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(screen.getByText(message)).toBeInTheDocument();
  fireEvent.click(toggleButton);

  // await wait(() => expect(screen.queryByText(message)).not.toBeInTheDocument());
  expect(screen.queryByText(message)).not.toBeInTheDocument();
});
