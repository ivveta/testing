import { screen, render, fireEvent } from '@testing-library/react';
import { Main } from '../7-use-router';
// импорт MemoryRouter, чтобы создать собственную историю
import { Link, MemoryRouter } from 'react-router-dom';

test('main renders About and Home and I can navigate to this pages', () => {
  render(
    // <MemoryRouter initialEntries={['/']}>
    // initialEntries={['/']} - значение по-умолчанию
    <MemoryRouter>
      <Main />
    </MemoryRouter>,
  );

  const homeLink = screen.getByText(/about/i);

  fireEvent.click(homeLink);

  expect(screen.getByRole('heading')).toHaveTextContent(/about/i);
});

test('landing on a bad page shows no match component', () => {
  const { debug } = render(
    <MemoryRouter initialEntries={['/something-that-does-not-match']}>
      <Main />
    </MemoryRouter>,
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/404/i);
});
