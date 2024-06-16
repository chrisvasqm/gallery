import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState('');

  const handleImageLoad = async () => {
    const response = await axios.get('http://localhost:3001/api/image/wallpaper-1-min.webp');
    setImage(response.data);
  }

  return (
    <>
      <h1>Gallery</h1>
      <button onClick={handleImageLoad}>Load image</button>
      {image && <img src={image} width={300} style={{ display: 'block' }} />}
    </>
  )
}

export default App
