import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#facb33]">
    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#ab0020] border-solid"></div>
  </div>
);

export default Loader; 