import React from "react";

const FullScreenSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-blue-600 animate-pulse opacity-40"></div>
        <div className="mt-4 text-center text-lg font-medium text-blue-600">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default React.memo(FullScreenSpinner);
