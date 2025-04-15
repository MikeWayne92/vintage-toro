import React from 'react';
import './App.css';
import ThreeDViewer from './components/ThreeDViewer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-3d">
        <ThreeDViewer />
      </div>
      <MainContent />
    </div>
  );
}

export default App;
