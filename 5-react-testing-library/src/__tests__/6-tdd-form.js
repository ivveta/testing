import { screen, render, fireEvent } from '@testing-library/react';
import { Editor } from '../6-post-editor';
import { savePost as mockSavePost } from '../api';

jest.mock('../api');

afterEach(() => {
  jest.clearAllMocks();
});

test('renders a form with title, content, tags, and a submit button', () => {
  const fakeUser = {
    id: 'user-1',
  };

  const fakePost = {
    title: 'Test Title',
    content: 'Test content',
    tags: ['tag1', 'tag2'],
  };

  mockSavePost.mockResolvedValueOnce();
  render(<Editor user={fakeUser} />);

  screen.getByLabelText(/title/i).value = fakePost.title;
  screen.getByLabelText(/content/i).value = fakePost.content;
  screen.getByLabelText(/tags/i).value = fakePost.tags.join(', ');

  const submitButton = screen.getByText(/submit/i);

  expect(submitButton).not.toBeDisabled('disabled');

  fireEvent.click(submitButton);
  expect(submitButton).toBeDisabled();

  expect(mockSavePost).toHaveBeenCalledTimes(1);
  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    authorId: fakeUser.id,
  });
});
