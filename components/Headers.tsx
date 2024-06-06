import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pages = [
    { name: "Recursos e informações", link: "information" },
    { name: "Técnica de respiração", link: "breath" },
    { name: "Ajuda profissional", link: "professionalhelp" },
    { name: "Chat de suporte", link: "chatcvv" },
    { name: "Como está se sentindo?", link: "questionnaire" },
  ];

  return (
    <div className="w-full bg-amber-50 font-bold text-black text-base drop-shadow">
      <div className="justify-between flex items-center h-12 w-4/5 mx-auto">
        <Link href={"/"} className="text-xl">
          Okay!
        </Link>
        <div>
          <Link href="/signup" className="mr-4">
            Sign Up
          </Link>
          <Link href="/signin">Login</Link>
        </div>
      </div>
      <div className="mx-auto flex items-center h-12 w-4/5 font-normal">
        {/* <Image src="/logo.svg" alt="Okay!" width={25} height={25} /> */}
        <div className="grow">
          <div className="flex items-center justify-between gap-2 md:gap-8">
            {pages.map((page) => (
              <Link
                href={`/${page.link}`}
                key={page.link}
                className="text-black text-sm"
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
