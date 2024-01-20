"use client";
import React from "react";
import { Pokemon } from "@/types/pokemon";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

interface CardProps {
  pokemon: Pokemon;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const { name, types, id } = pokemon;
  const bgColorClass = types[0].type.name;

  return (
    <motion.div
      variants={item}
      className={` bg-[rgb(245,248,248)]  rounded-2xl w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
    >
      <Link
        href={name}
        className="flex justify-between items-center flex-row gap-3"
      >
        <div className="p-6">
          <span className="font-medium text-2xl dark:text-dark">#{id}</span>
          <h2 className="font-bold text-xl dark:text-dark">{name}</h2>
          <div className="flex gap-2 mt-2">
            {types.map((type, i) => {
              return (
                <div
                  key={i}
                  className={`${type.type.name} p-2 rounded-lg text-white`}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`w-[200px] relative h-[200px] ${bgColorClass} rounded-2xl`}
        >
          <Image
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
            fill
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
