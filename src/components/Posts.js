import React, { useState } from 'react';
import './Posts.css';
import highlight4 from '../img/highlight4.jpg';
import highlight1 from '../img/highlight1.jpg';
import highlight2 from '../img/highlight2.jpg';
import highlight3 from '../img/highlight3.jpg';
import post from '../img/posts.jpg';
import reel1 from '../img/reel1.mp4';
import reel2 from '../img/reel2.mp4';
import PostView from './PostView';

function Posts() {
  const [isPostViewOpen, setPostViewOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const postsData = [
    {
      img: highlight4,
      video: reel1,
      description: "This is a description for video 1.",
      type: 'video', // Indicates this post has a video
    },
    {
      img: highlight1,
      description: "This is a description for image 1.",
      type: 'image', // Indicates this post is just an image
    },
    {
      img: highlight2,
      video: reel1,
      description: "This is a description for video 3.",
      type: 'video',
    },
    {
      img: highlight3,
      video: reel2,
      description: "This is a description for video 4.",
      type: 'video',
    },
    {
      img: highlight3,
      description: "This is a description for image 2.",
      type: 'image',
    },
  ];

  const openPostView = (post) => {
    setSelectedPost(post);
    setPostViewOpen(true);
  };

  const closePostView = () => {
    setPostViewOpen(false);
    setSelectedPost(null);
  };

  return (
    <div>
      <div className="post-title">
        <img src={post} className="image" alt="Posts" />
        <h4>Posts</h4>
      </div>
      <div className="posts">
        {postsData.map((post, index) => (
          <div className="post" key={index} onClick={() => openPostView(post)}>
            <img src={post.img} alt={`Post ${index + 1}`} />
            <div className="overlay">
              <i className="icon like-icon">❤100</i>
              <i className="icon comment-icon">📑</i>
            </div>
          </div>
        ))}
      </div>

      {isPostViewOpen && <PostView onClose={closePostView} post={selectedPost} />}
    </div>
  );
}

export default Posts;
