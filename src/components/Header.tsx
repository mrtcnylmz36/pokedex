"use client";
import React from "react";
import Logo from "./Logo";
import Switch from "./Switch";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[rgb(245,248,248)] border-b-2 dark:bg-dark">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-10 py-2">
        <Logo />

        <div className="flex items-center gap-3">
       
          <Switch />
        </div>
      </div>
    </header>
  );
};

export default Header;
