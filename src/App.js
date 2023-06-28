import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ChatForm from './components/ChatForm';
import StoryDisplay from './components/StoryDisplay';

const API_KEY = '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'; // Reemplaza con tu propia API key

const App = () => {
  const [story, setStory] = useState('');

  const generateStory = async (topic) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: `Escribe una historia sobre ${topic}` },
            { role: 'user', content: `Una vez en un lugar lejano...` },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const { choices } = response.data;
      const { content } = choices[0].message;
      setStory(content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Generador de Historias</h1>
      <div className="container">
        <ChatForm onGenerateStory={generateStory} />
        {story && <StoryDisplay story={story} />}
      </div>
    </div>
  );
};

export default App;