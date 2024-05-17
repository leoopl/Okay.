import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const pages = [
		{ name: 'Recursos e informações', link: 'information' },
		{ name: 'Técnica de respiração', link: 'breath' },
		{ name: 'Ajuda profissional', link: 'professionalhelp' },
		{ name: 'Chat de suporte', link: 'chatcvv' },
		{ name: 'Como está se sentindo?', link: 'questionnaire' },
	];

    return(
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            {/* <Image src="/logo.svg" alt="Okay!" width={25} height={25} /> */}
            <Link href={'/'} className="font-bold text-selectiveyellow">Okay!</Link>
            <div className="grow">
                <div className="flex items-center justify-center gap-2 md:gap-8">
                    {pages.map((page) => (
                        <Link href={`/${page.link}`} key={page.link} className="text-selectiveyellow">{page.name}</Link>
                    ))}
                </div>
            </div>
            <div>
                <Link href="/singup" className="mr-2 font-bold text-selectiveyellow">Sing Up</Link>
                <Link href="/singin" className="font-bold text-selectiveyellow">Login</Link>
            </div>
        </div>
    )
};
