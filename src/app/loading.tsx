import Skeleton from "@/components/Skeleton";

import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[rgb(245,248,248)] dark:bg-dark">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-yellow-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default loading;
