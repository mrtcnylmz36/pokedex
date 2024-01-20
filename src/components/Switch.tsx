"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Switch = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setTheme } = useTheme();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-yellow-400"></span>

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
};

export default Switch;
