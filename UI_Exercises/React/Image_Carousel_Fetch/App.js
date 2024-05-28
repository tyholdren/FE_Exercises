import React, { useState, useEffect } from 'react';
import './style.css';
const URL = 'https://www.reddit.com/r/aww/top/.json?t=all';

export default function App() {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurIndex(current => {
        const newIndex = (current + 1) % images.length;
        updateCarousel(newIndex);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const updateCarousel = (newIndex, clickEvent) => {
    const newImage = images[newIndex];
    setImage(newImage);

    if (clickEvent) {
      setCurIndex(newIndex);
    }
  };

  const fetchImages = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const imageArray = data.data.children.map(child => {
      return child.data.thumbnail;
    });
    setImages(imageArray);
  };

  return (
    <div>
      <div>
        <div className="carousel-container">
          <button
            className="carousel-buttons left"
            onClick={() => updateCarousel(curIndex - 1, true)}
          >
            Left
          </button>
          <img className="image" src={image} alt="blank image" />
          <button
            className="carousel-buttons right"
            onClick={() => updateCarousel(curIndex + 1, true)}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
}
