import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { GreetingLoader } from '../greeting-loader-01-mocking';
import { loadGreeting as mockLoadGreeting } from '../api';

jest.mock('../api');

test('loads greetings on click', async () => {
  const testGreeting = 'TEST_GREETING';

  mockLoadGreeting.mockResolvedValueOnce({ data: { greeting: testGreeting } });
  const { debug } = render(<GreetingLoader />);

  const nameInput = screen.getByLabelText(/name/i);

  // const button = screen.getByRole('button');
  const loadButton = screen.getByText(/load/i);

  nameInput.value = 'Mary';
  fireEvent.click(loadButton);
  expect(mockLoadGreeting).toBeCalledWith('Mary');
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1);

  const greeting = screen.getByLabelText(/greeting/i);

  await waitFor(() => expect(greeting).toHaveTextContent(testGreeting));
});
