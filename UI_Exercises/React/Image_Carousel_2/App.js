import React, { useState, useEffect } from 'react';
import './style.css';

const URL = 'https://www.reddit.com/r/aww/top/.json?t=all';
export default function App() {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        const returnedImages = data.data.children;
        setImages(returnedImages);
        console.log(returnedImages);
      } catch (error) {
        console.log({ error });
      }
    };
    getImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const getPrevImage = () => {
    if (activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
    }
  };

  const getNextImage = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(prevIndex => prevIndex + 1);
    }
    console.log({ activeIndex });
  };

  return (
    <div className="app-container">
      <button
        className="carousel-item--button left-button"
        onClick={() => getPrevImage()}
      >
        Prev Image
      </button>
      <div
        className="carousel-container"
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: '280px',
          height: '280px',
        }}
      >
        {images.map(({ data }, index) => {
          return (
            <div
              key={data.id}
              style={{
                minWidth: '100%',
                height: '100%',
                position: 'absolute',
                left: `${index * 100}%`,
                transform: `translateX(${-activeIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <img
                src={data.thumbnail}
                alt="carousel-image"
                style={{ width: `100%`, height: `100%` }}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-item--button right-button"
        onClick={() => getNextImage()}
      >
        Next Image
      </button>
    </div>
  );
}
