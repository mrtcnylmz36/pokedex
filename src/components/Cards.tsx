"use client";
import React from "react";
import Card from "./Card";
import { Pokemon } from "@/types/pokemon";
import { motion } from "framer-motion";

const container = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

interface CardsProps {
  pokemons: Pokemon[];
}

const Cards: React.FC<CardsProps> = ({ pokemons }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </motion.div>
  );
};

export default Cards;
