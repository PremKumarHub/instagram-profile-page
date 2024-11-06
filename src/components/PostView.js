import React from 'react';
import './postView.css';

function PostView({ onClose, post }) {
  if (!post) return null;

  return (
    <div className="post-view-container">
      <div className="media-section">
        {post.type === 'video' ? (
          <video className="post-video" autoPlay loop muted={false}>
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={post.img} alt="Post" className="post-image" />
        )}
      </div>
      <div className="interaction-section">
        <div className="butt">
          <button onClick={onClose} className="close-button">Close</button>
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>{post.description}</p>
        </div>
        <div className="comments">
          <h4>Comments</h4>
          <div className="comment">
            <strong>User1:</strong> Great content!
          </div>
          <div className="comment">
            <strong>User2:</strong> Love this post!
          </div>
        </div>
        <div className="icons">
          <button className="icon">❤️</button>
          <button className="icon">💬</button>
          <button className="icon">📤</button>
          <button className="icon">🔖</button>
        </div>
      </div>
    </div>
  );
}

export default PostView;
