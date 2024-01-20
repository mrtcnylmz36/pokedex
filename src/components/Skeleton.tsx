import React from "react";

const Skeleton = () => {
  return (
    <div className={` bg-gray-200 animate-pulse rounded-2xl w-full `}>
      <div className={`w-[200px] relative h-[200px]  rounded-2xl`}></div>
    </div>
  );
};

export default Skeleton;
