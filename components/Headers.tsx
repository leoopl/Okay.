"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "Recursos e informações", link: "information" },
    { name: "Técnica de respiração", link: "breath" },
    { name: "Ajuda profissional", link: "professionalhelp" },
    { name: "Chat de suporte", link: "chatcvv" },
    { name: "Como está se sentindo?", link: "questionnaire" },
  ];

  return (
    <div
      className={`w-full font-bold text-black text-base drop-shadow fixed z-10 transition-colors duration-300 ${
        isScrolled ? "bg-amber-50" : ""
      }`}
    >
      <div className="justify-between flex items-center w-4/5 mx-auto h-12">
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link href={"/"} className="text-xl">
          Okay!
        </Link>
        <div className="hidden lg:flex">
          <Link href="/signup" className="mr-4">
            Sign Up
          </Link>
          <Link href="/signin">Login</Link>
        </div>
      </div>
      <div className="mx-auto flex items-center w-4/5 font-normal h-12">
        {/* <Image src="/logo.svg" alt="Okay!" width={25} height={25} /> */}
        <div className="grow">
          <div
            className={`mx-auto flex justify-between items-center font-normal ${
              isOpen ? "flex" : "hidden"
            } lg:flex lg:h-12 max-lg:flex-col max-lg:bg-white max-lg:absolute max-lg:items-start max-lg:p-5 max-lg:left-1/5 max-lg:top-12 max-lg:h-fit max-lg:gap-6`}
          >
            {pages.map((page) => (
              <Link
                href={`/${page.link}`}
                key={page.link}
                className="text-black text-sm pb-2"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
