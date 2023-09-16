// BlobBackground.js
import React, { useState, useEffect } from 'react';

const Blob = () => {
  const [blobPosition, setBlobPosition] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBlobPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="blob"
      style={{
        left: blobPosition.x + 'px',
        top: blobPosition.y + 'px',
      }}
    ></div>
  );
};

export default Blob;
