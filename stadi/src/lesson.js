import React, { useState } from 'react';
import './lesson.css';

const audioLessons = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    content: "React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class. This makes it easier to reuse stateful logic between components and makes components easier to understand.",
    audioSrc: "https://example.com/audio/react-hooks-intro.mp3"
  },
  {
    id: 2,
    title: "Understanding CSS Grid",
    content: "CSS Grid is a two-dimensional layout system that can handle both columns and rows. It simplifies the process of creating complex layouts and allows for more flexibility in design. With CSS Grid, you can create responsive layouts with less code.",
    audioSrc: "https://example.com/audio/css-grid-explained.mp3"
  },
  {
    id: 3,
    title: "JavaScript Promises Demystified",
    content: "Promises in JavaScript provide a way to handle asynchronous operations. They represent a value that may not be available immediately but will be resolved at some point in the future. Promises make it easier to manage and reason about asynchronous code.",
    audioSrc: "https://example.com/audio/javascript-promises.mp3"
  }
];

export default function AudioLessonsPage() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audioSrc) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(audioSrc);
    audio.play();
    setCurrentAudio(audio);
  };

  return (
    <div className="audio-lessons-page">
      <header className="header">
        <h1>Audio Lessons</h1>
      </header>
      <main className="main-content">
        <p className="intro">Welcome to our audio lessons. Click on the play button next to each article to listen to the audio version.</p>
        <div className="lesson-list">
          {audioLessons.map((lesson) => (
            <article key={lesson.id} className="lesson-card">
              <h2>{lesson.title}</h2>
              <p>{lesson.content}</p>
              <button 
                className="play-button" 
                onClick={() => playAudio(lesson.audioSrc)}
                aria-label={`Play audio for ${lesson.title}`}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </article>
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 EduCollab. All rights reserved.</p>
      </footer>
    </div>
  );
}