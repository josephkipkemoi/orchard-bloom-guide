import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

const DonateButton = () => {
  return (
  <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-fit">
  <button 
   style={{ backgroundColor: "black", color: "white", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px", width: "180px" }}
   className="font-bold text-2xl p-4 flex items-center justify-center text-center"
   >
    <FaHandHoldingHeart className="h-5 w-5" />
    <span style={{ marginLeft: "12px" }}>Donate</span>     
  </button>
</div>

  );
};

export default DonateButton;
