import React from 'react';
import Slider from './components/Slider';
import images from './images'; // Corrected import path

function App() {
  return (
    <div>
      <h1>React Image Slider</h1>
      <Slider slides={images} />
    </div>
  );
}

export default App;
