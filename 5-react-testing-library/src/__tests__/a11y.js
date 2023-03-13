import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const Form = () => <img src="#" alt="test" />;

test('the form is accessible', async () => {
  const { container } = render(<Form />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
