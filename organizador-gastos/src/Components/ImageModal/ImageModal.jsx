import React from 'react';

function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-8 rounded-md">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ❌
          </button>
        </div>
        <img src={imageUrl} alt="Full size" className="max-w-96 max-h-80" />
      </div>
    </div>
  );
}

export default ImageModal;