"use client";
import { Pokemons } from "@/types/pokemons";
import { FC } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface IProps {
  data: Pokemons;
}

const Pagination: FC<IProps> = ({ data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";
  const limit = process.env.LIMIT ? parseInt(process.env.LIMIT, 10) : 12;

  const nextPage = () => {
    const page = Number(currentPage) + 1;
    router.push(`?page=${page}`);
  };
  const previusPage = () => {
    const page = Number(currentPage) - 1;
    router.push(`?page=${page}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4 text-gray-600 md:px-8">
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
        <button
          type="button"
          className="px-4 py-2 border border-yellow-400 rounded-lg duration-150 hover:bg-gray-50 mx-5 dark:text-white"
          onClick={previusPage}
          disabled={Number(currentPage) == 1}
        >
          Previus
        </button>
        <div className="dark:text-white">
          Page {currentPage} of {Math.ceil(data.count / limit)}
        </div>
        <button
          type="button"
          className="px-4 py-2 border border-yellow-400 rounded-lg duration-150 hover:bg-gray-50 mx-5 dark:text-white"
          onClick={nextPage}
          disabled={Number(currentPage) == Math.ceil(data.count / limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
