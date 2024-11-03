// Highlights.js
import React from 'react';
import './Highlights.css';
import highlight1 from '../img/highlight1.jpg';
import highlight2 from '../img/highlight2.jpg';
import highlight3 from '../img/highlight3.jpg';
import highlight4 from '../img/highlight4.jpg';

function Highlights() {
  const highlights = [
    { name: 'kabib', img: highlight1 },
    { name: 'mighty mouse', img: highlight2 },
    { name: 'conor', img: highlight3 },
    { name: 'khamzat', img: highlight4 }
  ];

  return (
    <div className="highlights">
      {highlights.map((highlight, index) => (
        <div className="highlight" key={index}>
          <img src={highlight.img} alt={highlight.name} />
          <p>{highlight.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;