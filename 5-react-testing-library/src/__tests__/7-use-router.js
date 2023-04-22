import { screen, render, fireEvent } from '@testing-library/react';
import { Main } from '../7-use-router';
// импорт MemoryRouter, чтобы создать собственную историю
import { Link, MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/', ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
test('main renders About and Home and I can navigate to this pages', () => {
  renderWithRouter(<Main />);

  const homeLink = screen.getByText(/about/i);

  fireEvent.click(homeLink);

  expect(screen.getByRole('heading')).toHaveTextContent(/about/i);
});

test('landing on a bad page shows no match component', () => {
  renderWithRouter(<Main />, { route: '/something-that-does-not-match' });

  expect(screen.getByRole('heading')).toHaveTextContent(/404/i);
});
