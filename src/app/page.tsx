import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // This is the navigation bar
    <div className="w-full h-20 bg-stone-950 flex justify-center">
      <div className="items-center grid grid-cols-3 gap-5 text-white">
        <div><p className="font-bold">About</p></div>
        <div>
        <a
            href="https://github.com/your-username/your-repo-name"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold cursor-pointer"
          >
            Github
          </a>
        </div>
        <div>
        <Link href="/blogs">
            <p className="font-bold cursor-pointer">Blogs</p>
          </Link>
        </div>
      </div>
    </div>   
  );
}
