import { getPokemon } from "@/services/api";
import { Pokemon as Pok } from "@/types/pokemon";
import Image from "next/image";
import React from "react";

interface IProps {
  params: {
    "pokemon-detail": string;
  };
}

const Pokemon = async ({ params }: IProps) => {
  const pokemon: Pok | undefined = await getPokemon(params["pokemon-detail"]);

  return (
    <div className="bg-[rgb(245,248,248)] dark:bg-dark  h-full">
      <div className="max-w-screen-xl flex flex-col mx-auto px-10">
        <div className="flex items-center justify-between w-full flex-col md:flex-row gap-5">
          <div className="flex items-center justify-between flex-col border-4 mt-5 bg-[rgb(245,248,248)] dark:bg-dark p-4 rounded-lg w-full ">
            <h2 className="text-yellow-400 text-[150px]">#{pokemon?.id}</h2>
            <h1 className="text-dark dark:text-white font-bold  text-[60px] md:text-[100px] -mt-10">
              {pokemon?.name}
            </h1>
          </div>
          <div
            className={`w-full h-[377px] rounded-lg mt-5 border-4 flex items-center bg-green-500`}
          >
            <Image
              src={pokemon?.sprites?.other?.dream_world?.front_default || ""}
              width={300}
              height={300}
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
        <div className=" my-2 rounded-xl p-5 w-full flex justify-center gap-1 items-center border-4">
          <div className="flex gap-2 items-center flex-col px-10 border-r-4">
            <span>{pokemon?.weight} kg</span>
            <p className="text-md">Weight</p>
          </div>
          <div className="flex ml-6  gap-2  items-center flex-col ">
            <span>{pokemon?.height} m</span>
            <p className="text-md">Height</p>
          </div>
        </div>
        <div className="flex flex-col items-center border-4 py-4 rounded-lg px-2 mb-5">
          <h2 className="text-center text-xl">Base States</h2>
          <div className="flex gap-5 items-center ">
            <div className="mt-5 pr-8 border-r-4 leading-8">
              {pokemon?.stats.map((state, i) => (
                <div key={i} className="">
                  {state.stat.name}
                </div>
              ))}
            </div>
            <div className="mt-5 pr-8 border-r-4 leading-8">
              {pokemon?.stats.map((state, i) => (
                <div key={i} className="">
                  {state.base_stat}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 mt-5">
              {Array(pokemon?.stats.length ?? 0)
                .fill(null)
                .map((_, i) => {
                  const widthRate = 6;
                  const width: string =
                    String(widthRate * (pokemon?.stats[i]?.base_stat ?? 0)) +
                    "px";

                  return (
                    <div
                      key={i}
                      className={`h-4 rounded-lg bg-green-400 w-[${
                        widthRate * 100
                      }px] hidden lg:block`}
                    >
                      <div
                        className={`h-4 rounded-lg bg-yellow-400 `}
                        style={{ width: `${width}` }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
