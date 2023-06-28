import React, { useState } from 'react';

const ChatForm = ({ onGenerateStory }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateStory(topic);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Ingresa el tema de la historia"
      />
      <button className="generate-button" type="submit">
        Generar historia
      </button>
    </form>
  );
};

export default ChatForm;