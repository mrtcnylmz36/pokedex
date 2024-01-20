"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl">Something went wrong!</h2>
      <button
        className="mt-5 text-xl hover:opacity-50 transition-all  bg-yellow-500 px-10 py-4 text-white rounded-xl"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
