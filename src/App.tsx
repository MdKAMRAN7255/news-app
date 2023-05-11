import React from 'react';
import './App.css';
import BodyWrapper from './Component/bodyWrapper/bodyWrapper';
import Navbar from './Component/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyWrapper />
    </div>
  );
}

export default App;
