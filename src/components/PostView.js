import React from 'react';
import './postView.css';
import postImageSrc from '../img/highlight4.jpg'; // Renamed to avoid conflict

function PostView({ onClose, postImage }) { // Keep postImage as a prop
  return (
    <div className="post-view-container">
      
      <div className="video-section">
        {/* Display the image or video based on your requirement */}
        <img src={postImage || postImageSrc} alt="Selected Post" className="post-image" />
        {/* If using video, uncomment below */}
        {/* <video controls className="post-video">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <div className="interaction-section">
        <div className="icons">
          <button className="icon">❤️</button>
          <button className="icon">💬</button>
          <button className="icon">📤</button>
          <button className="icon">🔖</button>
          <button onClick={onClose} className="close-button">Close</button>
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
