// if environments doesn't support jest.mock , like storybook

import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { GreetingLoader } from '../greeting-loader-02-dependency-injection';

test('loads greetings on click', async () => {
  const mockLoadGreeting = jest.fn();
  const testGreeting = 'TEST_GREETING';

  mockLoadGreeting.mockResolvedValueOnce({ data: { greeting: testGreeting } });
  render(<GreetingLoader loadGreeting={mockLoadGreeting} />);

  const nameInput = screen.getByLabelText(/name/i);

  const loadButton = screen.getByRole('button');

  nameInput.value = 'Mary';
  fireEvent.click(loadButton);
  expect(mockLoadGreeting).toBeCalledWith('Mary');
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1);

  const greeting = screen.getByLabelText(/greeting/i);

  await waitFor(() => expect(greeting).toHaveTextContent(testGreeting));
});
