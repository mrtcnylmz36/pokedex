import axios from "axios";
import { Pokemon } from "@/types/pokemon";
import { Pokemons } from "@/types/pokemons";

interface PokemonData {
  results: Pokemon[];
  data: Pokemons;
}

const getAllPokemons = async (offset: number): Promise<PokemonData> => {
  try {
    const { data } = await axios.get<Pokemons>(`${process.env.BASE_URL}/pokemon?limit=${process.env.LIMIT}&offset=${offset}`);

    const promises: Promise<Pokemon>[] = data.results.map(async (pokemon) => {
      const res = await axios.get<Pokemon>(pokemon.url);
      return res.data;
    });

    const results = await Promise.all(promises);

    return {
      results,
      data
    };
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error("Pokemons couldn't be fetched");
    
  }
};


const getPokemon = async (name:string) => {
  try {
    const { data } = await axios.get<Pokemon>(`${process.env.BASE_URL}/pokemon/${name}`);
    return data
  } catch (error) {
     console.error("An error occurred:", error);
  }
}



export { getAllPokemons,getPokemon };
