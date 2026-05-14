// App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sections from './components/Section';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './components/Chatbot.css';

function App() {
  // Generate 20 purple leaves with random properties
  const leaves = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 8}s`,
    size: `${20 + Math.random() * 25}px`,
    rotation: `${Math.random() * 360}deg`,
  }));

  return (
    <div className="App">
      <div className="bg-effect-layer" aria-hidden="true"></div>
      
      {/* Natural Leaf Flow Container */}
      <div className="leaf-container" aria-hidden="true">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="leaf"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              width: leaf.size,
              height: leaf.size,
              '--rotation': leaf.rotation,
            }}
          />
        ))}
      </div>

      <Header />
      <Sections />
      <Chatbot />
      <Footer />
    </div>
  );

}

export default App;