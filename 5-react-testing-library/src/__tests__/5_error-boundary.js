import { render, fireEvent, screen, queryByRole } from '@testing-library/react';
import { reportError as mockReportError } from '../api';
import { ErrorBoundary } from '../error-boundary';

jest.mock('../api');

// убрали отображение Error в консоли
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

// вернули console.error после прохождения тестов
afterAll(() => {
  console.error.mockRestore();
});

// почистили данные мока
afterEach(() => {
  jest.clearAllMocks();
});

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
}

test('calls reportError and renders that there was a problem', () => {
  mockReportError.mockResolvedValueOnce({ success: true });

  const { rerender, debug } = render(
    <ErrorBoundary>
      <Bomb shouldThrow={false} />
    </ErrorBoundary>,
  );

  // взрываем бомбу, проверяем наличие вывод ошибок
  rerender(
    <ErrorBoundary>
      <Bomb shouldThrow />
    </ErrorBoundary>,
  );

  // проверяет, что mockReportError вызвана с параметрами
  // error - любая ошибка
  // info - объект со стеком компонентов, включающий компонент Bomb
  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining('Bomb') };
  expect(mockReportError).toHaveBeenCalledWith(error, info);
  expect(mockReportError).toHaveBeenCalledTimes(1);

  // должно было вызваться 2 раза: из jsdom и react, почему фактически 3 - непонятно
  expect(console.error).toHaveBeenCalledTimes(3);

  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(
    `"There was a problem."`,
  );

  console.error.mockClear();
  mockReportError.mockClear();

  rerender(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>,
  );

  // ресетим ошибку - проверяем отсутствие вывода ошибки
  fireEvent.click(screen.getByText(/try again/i));

  expect(mockReportError).not.toHaveBeenCalled();
  expect(console.error).not.toHaveBeenCalled();
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  expect(screen.queryByText(/try again/i)).not.toBeInTheDocument();
});
