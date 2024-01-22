import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex w-[800px] mx-auto m-3 p-3 bg-gray-100 border border-gray-300 rounded-md shadow-md hover:shadow-2xl dark:shadow-blue-500">
      <div className="w-52 h-52 rounded-full bg-gray-300 animate-pulse"></div>
      <div className="flex flex-col ml-4">
        <div className="w-40 h-6 bg-gray-300 animate-pulse mt-4"></div>
        <div className="w-52 h-4 bg-gray-300 animate-pulse mt-2"></div>
        <div className="flex mt-8 gap-8">
          <div className="w-20 h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-20 h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-20 h-8 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="w-32 h-4 bg-gray-300 animate-pulse mt-2"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
