'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const VideoBG = () => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const image = imageRef.current;

    // Check if the video loads successfully
    const checkVideoLoad = () => {
      if (video && video.error) {
        // If video fails to load, hide it and show the image
        video.style.display = 'none';
        image.style.display = 'block';
      } else if (video && video.readyState >= 2) {
        // Video is loaded and can play, hide the image
        image.style.display = 'none';
      }
    };

    // Add event listeners for video loading and errors
    video.addEventListener('loadeddata', checkVideoLoad);
    video.addEventListener('error', checkVideoLoad);

    // Attempt to play the video
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log('Autoplay or video load failed:', error);
        video.style.display = 'none';
        image.style.display = 'block';
      });
    }

    // Cleanup event listeners
    return () => {
      video.removeEventListener('loadeddata', checkVideoLoad);
      video.removeEventListener('error', checkVideoLoad);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        poster='/background/bg.png'
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full max-h-svh object-cover rounded-2xl"
        style={{ display: 'block' }}
      >
        <source src="/background/bg-video.mp4" type="video/mp4" />
        <Image
          ref={imageRef}
          src="/background/bg.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', display: 'none' }}
          alt="Vandit Shah - Portfolio Background"
          className="absolute z-10 w-full h-full max-h-screen object-cover rounded-2xl"
        />
      </video>
    </div>
  );
};

export default VideoBG;