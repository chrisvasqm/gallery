import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage('https://chrisvasqm-gallery.nyc3.cdn.digitaloceanspaces.com/wallpaper-1-min.jpg');
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      {image ? <img src={image} /> : <p>Loading...</p>}
    </>
  )
}

export default App
