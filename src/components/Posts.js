import React, { useState } from 'react';
import './Posts.css';
import highlight4 from '../img/highlight4.jpg';
import highlight1 from '../img/highlight1.jpg';
import highlight2 from '../img/highlight2.jpg';
import highlight3 from '../img/highlight3.jpg';
import post from '../img/posts.jpg';
import PostView from './PostView'; // Import the PostView component


function Posts() {
  const [isPostViewOpen, setPostViewOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // State for the selected post

  const postImages = [
    highlight4,
    highlight3,
    highlight2,
    highlight1,
    highlight3,
  ];

  const openPostView = (img) => {
    setSelectedPost(img); // Set the selected post
    setPostViewOpen(true); // Open the PostView
  };

  const closePostView = () => {
    setPostViewOpen(false); // Close the PostView
    setSelectedPost(null); // Reset selected post
  };

  return (
    <div>
      <div className="post-title">
        <img src={post} className="image" alt="Posts" />
        <h4>Posts</h4>
      </div>
      <div className="posts">
        {postImages.map((img, index) => (
          <div className="post" key={index} onClick={() => openPostView(img)}>
            <img src={img} alt={`Post ${index + 1}`} />
            <div class="overlay">
                <i class="icon like-icon">❤100</i>
                <i class="icon comment-icon">📑</i>
            </div>
          </div>
        ))}
      </div>

      {/* Render the PostView popup conditionally */}
      {isPostViewOpen && <PostView onClose={closePostView} />}
    </div>
  );
}

export default Posts;
