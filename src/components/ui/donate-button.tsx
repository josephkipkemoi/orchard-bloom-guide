import React from 'react';

const DonateButton = () => {
  return (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit">
  <button className="font-bold text-2xl bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 animate-bounce">
    Donate 💖
  </button>
</div>

  );
};

export default DonateButton;
