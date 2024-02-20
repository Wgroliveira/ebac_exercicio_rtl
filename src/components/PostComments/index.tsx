import React, { useState } from 'react';


const PostComment = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <ul className="post-comments"></ul>
      <form className="post-comments-form" onSubmit={handleCommentSubmit}>
        <textarea
          className="post-comments-form-textarea"
          data-testid="comment-input"
          value={comment}
          onChange={handleCommentChange}
          required
        />
        <button 
          className="post-comments-form-button"
          type="submit"
          data-testid="submit-button"
        >
          Comentar
        </button>
      </form>
    </div>
  );
};

export default PostComment;
