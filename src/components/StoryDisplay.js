import React from 'react';

const StoryDisplay = ({ story }) => {
  return (
    <div className="story-display">
      <h2>Historia generada:</h2>
      <p>{story}</p>
    </div>
  );
};

export default StoryDisplay;