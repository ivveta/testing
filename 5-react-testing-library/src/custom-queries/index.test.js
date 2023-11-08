import { TestComponent } from './index';
import { customRender } from './custom-render';

test('check custom queries', () => {
  const { getByClass, queryByClass, getAllByClass } = customRender(
    <TestComponent />,
    {},
  );

  const header = getByClass('header');
  expect(header).toBeInTheDocument();

  const empty = queryByClass('empty');
  expect(empty).not.toBeInTheDocument();

  const articles = getAllByClass('article');
  expect(articles.length).toBe(2);
});
