// ProfileHeader.js
import React,  { useState } from 'react';
import './ProfileHeader.css';
import myimg from '../img/profile.jpg';

function ProfileHeader() {

const openpop=() =>{
  document.getElementById("pop").style.display="flex";
};
const closeopop=() =>{
  document.getElementById("pop").style.display="none";
}


  return (
    <div className="profile-header">
      <div className="profile-pic">
    <div className="border-gradient">
        <img src={myimg} onClick={openpop} alt="Profile" />
    </div>
</div>

      <div className="profile-details">
        <div class="flex">
        <h2>CODETHEWORLD</h2>


        <div class="profile-actions">
              <button>Follow</button>
              <button>Message</button>
          </div>
        </div>
        <div className="profile-stats">
          <span><strong>3,022</strong> Posts</span>
          <span><strong>67.6K</strong> Followers</span>
          <span><strong>2,454</strong> Following</span>
        </div>
        <p className="bio">
       
            <strong>CODETHEWORLD</strong><br />
           
          
       
          Digital creator<br />
          Founder @blackgirlssmoke & @gooddayflor<br />
          1/2 @kontentqueens<br />
          Sustainable fashion, clean beauty, wellness, eco-travel...
        </p>
       
      </div>
      <div className="profile-popup" id="pop" onClick={closeopop}>
        <img src={myimg}  />
      </div>
    </div>
  );
}

export default ProfileHeader;