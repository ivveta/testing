import { redirect } from 'react-router-dom';
import { useState } from 'react';
import { savePost } from './api';

export const Editor = ({ user }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [toRedirect, setToRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, tags } = e.target.elements;
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map((t) => t.trim()),
      authorId: user.id,
    };

    setIsSaving(true);

    savePost(newPost).then(() => setToRedirect(true));

    // if (toRedirect) {
    return redirect('/');
    // }
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
    </form>
  );
};
