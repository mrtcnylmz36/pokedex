import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" h-screen flex items-center justify-center flex-col ">
      <Image
        src={"/404-text.png"}
        width={800}
        height={800}
        className="-z-10 absolute"
        alt=""
      />
      <Image src={"/404.png"} width={500} height={500} alt="" />
      <Link
        href={"/"}
        className="mt-5 text-xl hover:opacity-50 transition-all  bg-yellow-500 px-10 py-4 text-white rounded-xl"
      >
        Return
      </Link>
    </div>
  );
}
