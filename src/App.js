import React from 'react';
import './App.css';
import ProfileHeader from './components/ProfileHeader';
import Highlights from './components/Highlights';
import Posts from './components/Posts';

function App() {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <Highlights />
      <Posts />
    </div>
  );
}

export default App;