import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
      <div>
        { /* This is the navigation bar */}
        <div className="w-full h-20 bg-stone-950 flex justify-center">
  <div className="items-center grid grid-cols-3 gap-5 text-white">
    <div>
    <Link href="/about" legacyBehavior>
        <p className="font-bold cursor-pointer">About</p>
      </Link></div>
    <div>
    <Link href="/" legacyBehavior>
        <p className="font-bold cursor-pointer">Home</p>
      </Link>
    </div>
    <div>
    <Link href="/blogs" legacyBehavior>
        <p className="font-bold cursor-pointer">Blogs</p>
      </Link>
    </div>
  </div>
</div>
        { /* This is the main content of the page */}
        <h1 className="text-6xl font-bold flex justify-center p-10">About me</h1>
      </div>
    );
  }