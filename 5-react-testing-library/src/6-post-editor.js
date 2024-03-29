import { redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { savePost } from './api';

export const Editor = ({ user }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [toRedirect, setToRedirect] = useState(false);
  const [postError, setPostError] = useState(null);

  useEffect(() => {
    if (toRedirect) {
      return redirect('/');
    }
  }, [toRedirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, tags } = e.target.elements;
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map((t) => t.trim()),
      authorId: user.id,
      date: new Date().toISOString(),
    };

    setIsSaving(true);
    try {
      await savePost(newPost);
      setToRedirect(true);
    } catch (response) {
      setPostError(response.data.error);
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" type="text" name="title" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
      {postError && <div role="alert">{postError}</div>}
    </form>
  );
};
