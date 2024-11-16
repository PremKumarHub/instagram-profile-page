import React, { useState } from 'react';
import './Highlights.css';
import highlight1 from '../img/highlight1.jpg';
import highlight2 from '../img/highlight2.jpg';
import highlight3 from '../img/highlight3.jpg';
// Import a sample video
import highlightVideo from '../img/reel1.mp4';

function Highlights() {
  const highlights = [
    { name: 'hightlight1', type: 'image', src: highlight1 },
    { name: 'hightlight2', type: 'image', src: highlight2 },
    { name: 'hightlight3', type: 'image', src: highlight3 },
    { name: 'hightlight4', type: 'video', src: highlightVideo } // Sample video
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
              <video src={selectedHighlight.src} autoPlay loop muted={false} />
            )}
            <p>{selectedHighlight.name}</p>
          { /*<button onClick={closeHighlight}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Highlights;
