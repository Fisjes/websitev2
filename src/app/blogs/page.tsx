import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Blogs() {
  // Fetch all Markdown files in the BlogPosts directory
  const files = fs.readdirSync(path.join(process.cwd(), 'src/app/blogs/BlogPosts'));
  const blogs = files
    .filter((file) => file.endsWith('.md')) // Ensure only Markdown files are processed
    .map((file) => {
      const filePath = path.join(process.cwd(), 'src/app/blogs/BlogPosts', file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent); // Extract front matter
      return {
        slug: file.replace('.md', ''), // Remove the .md extension
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date (newest first)

  return (
    <div className=''>
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
    </div>
      <h1 className="p-6 text-6xl text-center text-black font-bold mb-6">Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug} className="mb-4 text-center">
            <Link href={`/blogs/${blog.slug}`}>
              <div className="text-blue-500 hover:underline">
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-gray-500">{blog.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}