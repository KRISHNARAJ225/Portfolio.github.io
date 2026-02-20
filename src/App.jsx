// App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sections from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
   <div className="App">
    {/* Background effect layer — insert one of the variants below */}
    <div className="bg-effect-layer" aria-hidden="true"></div>
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;