'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const VideoBG = () => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const [showImage, setShowImage] = useState(false); // State to control image visibility

  useEffect(() => {
    const video = videoRef.current;
    const image = imageRef.current;

    // Function to show the fallback image
    const displayFallbackImage = () => {
      setShowImage(true);
      video.style.display = 'none';
      image.style.display = 'block';
    };

    // Function to check if the video can play
    const checkVideoLoad = () => {
      if (video.readyState >= 2) {
        // Video is loaded and can play
        setShowImage(false);
        video.style.display = 'block';
        image.style.display = 'none';
      } else {
        // Video failed to load
        displayFallbackImage();
      }
    };

    // Handle video errors (e.g., network issues, file not found)
    const handleError = () => {
      console.log('Video failed to load:', video.error);
      displayFallbackImage();
    };

    // Attempt to play the video
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log('Autoplay failed:', error);
        // Autoplay might fail due to power-saving mode or other restrictions
        displayFallbackImage();
      });
    }

    // Add event listeners for video loading and errors
    video.addEventListener('loadeddata', checkVideoLoad);
    video.addEventListener('error', handleError);

    // Additional check: If the video doesn't start playing within a timeout, show the image
    const timeout = setTimeout(() => {
      if (video.paused || video.readyState < 2) {
        console.log('Video did not start playing within 3 seconds, likely due to power-saving mode.');
        displayFallbackImage();
      }
    }, 3000); // Wait 3 seconds for the video to start

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', checkVideoLoad);
      video.removeEventListener('error', handleError);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        poster="/background/bg.png"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full max-h-svh object-cover rounded-2xl"
        style={{ display: showImage ? 'none' : 'block' }}
      >
        <source src="/background/bg-video.mp4" type="video/mp4" />
      </video>
      <Image
        ref={imageRef}
        src="/background/bg.gif"
        unoptimized
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%', display: showImage ? 'block' : 'none' }}
        alt="Vandit Shah - Portfolio Background"
        className="absolute z-10 w-full h-full max-h-screen object-cover rounded-2xl"
      />
    </div>
  );
};

export default VideoBG;