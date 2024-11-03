import React from 'react';
import './PostView.css';

function PostView({ onClose }) {
  return (
    <div className="post-view-container">
      <button onClick={onClose} className="close-button">Close</button>
      <div className="video-section">
        <video controls className="post-video">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="interaction-section">
        <div className="icons">
          <button className="icon">❤️</button>
          <button className="icon">💬</button>
          <button className="icon">📤</button>
          <button className="icon">🔖</button>
        </div>
        <div className="comments">
          <h4>Comments</h4>
          <div className="comment">
            <strong>User1:</strong> Great video!
          </div>
          <div className="comment">
            <strong>User2:</strong> Love this content!
          </div>
          {/* Add more comments as needed */}
        </div>
      </div>
    </div>
  );
}

export default PostView;
