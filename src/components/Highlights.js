import React, { useState } from 'react';
import './Highlights.css';
import highlight1 from '../img/highlight1.jpg';
import highlight2 from '../img/highlight2.jpg';
import highlight3 from '../img/highlight3.jpg';
import highlight4 from '../img/highlight4.jpg';
// Import a sample video
import highlightVideo from '../img/reel1.mp4';

function Highlights() {
  const highlights = [
    { name: 'kabib', type: 'image', src: highlight1 },
    { name: 'mighty mouse', type: 'image', src: highlight2 },
    { name: 'conor', type: 'image', src: highlight3 },
    { name: 'khamzat', type: 'video', src: highlightVideo } // Sample video
  ];

  const [selectedHighlight, setSelectedHighlight] = useState(null);

  const openHighlight = (highlight) => {
    setSelectedHighlight(highlight);
  };

  const closeHighlight = () => {
    setSelectedHighlight(null);
  };

  return (
    <div>
      <div className="highlights">
        {highlights.map((highlight, index) => (
          <div
            className="highlight"
            key={index}
            onClick={() => openHighlight(highlight)}
          >
            {highlight.type === 'image' ? (
              <img src={highlight.src} alt={highlight.name} />
            ) : (
              <video src={highlight.src} alt={highlight.name} />
            )}
            <p>{highlight.name}</p>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected highlight */}
      {selectedHighlight && (
        <div className="modal" onClick={closeHighlight}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedHighlight.type === 'image' ? (
              <img src={selectedHighlight.src} alt={selectedHighlight.name} />
            ) : (
              <video src={selectedHighlight.src} controls autoPlay />
            )}
            <p>{selectedHighlight.name}</p>
            <button onClick={closeHighlight}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Highlights;
