// Posts.js
import React from 'react';
import './Posts.css';
import highlight4 from '../img/highlight4.jpg';
import highlight1 from '../img/highlight1.jpg';
import highlight2 from '../img/highlight2.jpg';
import highlight3 from '../img/highlight3.jpg';
import post from '../img/posts.jpg';


function Posts() {
  const postImages = [
     highlight4,
     highlight3,
     highlight2,
     highlight1,
     highlight3,
    
  ];

  return (
    <div>
      <div className="post-title">
      <img src={post} class="image"/>
      <h4>posts</h4>
    </div>
    <div className="posts">

        {postImages.map((img, index) => (
          <div className="post" key={index}>
            <img src={img} alt={`Post ${index + 1}`} /> {/* Corrected here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
