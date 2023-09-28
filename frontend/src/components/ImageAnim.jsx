import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageAnim = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch images from fakestoreapi
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        // Extract image URLs from the response data
        const imageUrls = response.data.map((product) => product.image);

        // Set the fetched images
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-1/3 h-[60vh] rounded-3xl overflow-hidden shadow-md">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      ))}
      <div className='z-50 bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent absolute'>
        <p className='py-2 text-white text-center font-bold'>Happy Birthday</p>
      </div>
    </div>
  );
};

export default ImageAnim;
