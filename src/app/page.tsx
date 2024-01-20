import React from "react";
import { getAllPokemons } from "@/services/api";
import Cards from "@/components/Cards";
import Pagination from "@/components/Pagination";

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const limit = process.env.LIMIT ? parseInt(process.env.LIMIT, 10) : 12;

  const offset: number = (Number(page) - 1) * limit;
  const { results, data } = await getAllPokemons(offset);

  return (
    <div className="min-h-screen bg-[rgb(245,248,248)] dark:bg-dark ">
      <div className="max-w-screen-xl flex flex-col mx-auto px-10 py-2 mt-5">
        <Cards pokemons={results} />
        <Pagination data={data} />
      </div>
    </div>
  );
};

export default Home;
