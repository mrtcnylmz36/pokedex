import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-[rgb(245,248,248)] dark:bg-dark border-t-2 flex-col gap-2">
      <Link
        href={"https://www.linkedin.com/in/muratcan-yilmaz-811556270/"}
        className="hover:scale-125 transition-all delay-75"
      >
        <img src="LinkedIn.png" alt="" width={32} height={32} />
      </Link>
      <span className="">Made with ❤️ by Muratcan Yılmaz</span>
    </div>
  );
};

export default Footer;
