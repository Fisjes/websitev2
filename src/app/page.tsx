import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      { /* This is the navigation bar */}
      <div className="w-full h-20 bg-stone-950 flex justify-center">
        <div className="items-center grid grid-cols-3 gap-5 text-white">
          <div>
            <Link href="/about" className="font-bold cursor-pointer">
              About
            </Link>
          </div>
          <div>
            <Link href="/" className="font-bold cursor-pointer">
              Home
            </Link>
          </div>
          <div>
            <Link href="/blogs" className="font-bold cursor-pointer">
              Blogs
            </Link>
          </div>
        </div>
      </div>
      { /* This is the main content of the page */}
      <div className="w-100 h-200">
      <h1 className="text-4xl text-left text-black font-bold p-10">Hey there!</h1>
      <p className="text-black text-xl">Welcome to my porfolio website! My name is Benjamin and I am a Motion Graphics Designer and Junior Front-end Developer!</p>
      </div>
    </div>
  );
}