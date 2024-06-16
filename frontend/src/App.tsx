import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const handleImageLoad = async () => {
    const response = await axios.get('http://localhost:3001/api/images');
    setImages(response.data);
  }

  return (
    <>
      <h1>Gallery</h1>
      <button onClick={handleImageLoad}>Load image</button>
      {images && images.map(image => <img src={image} width={300} style={{ display: 'block' }} />)}
    </>
  )
}

export default App
