import React, { useEffect, useState } from "react";
import "./App.css";
import GalleryList from "../Gallery/GalleryList";

function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    fetch("/gallery")
      .then((response) => response.json())
      .then(setGallery)
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList gallery={gallery} />
    </div>
  );
}

export default App;
