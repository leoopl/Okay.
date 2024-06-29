import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row h-fit bg-opacity-55 justify-center bg-gray-700">
        <div className="text-white">
          &copy; {} Okay? All rights reserved to Okay project. |
        </div>
        <div className="flex h-fit self-center">
          <Link target="_blank" href="https://github.com/leoopl/Okay">
            <Image
              src="/github_white_logo.png"
              className="flex ml-2 text-white"
              width={20}
              height={5}
              alt="avatar"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
