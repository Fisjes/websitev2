import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Blogs() {
  // Fetch all Markdown files in the blogs directory
  const files = fs.readdirSync(path.join(process.cwd(), 'src/app/blogs'));
  const blogs = files
    .filter((file) => file.endsWith('.md')) // Ensure only Markdown files are processed
    .map((file) => {
      const filePath = path.join(process.cwd(), 'src/app/blogs', file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent); // Extract front matter
      return {
        slug: file.replace('.md', ''), // Remove the .md extension
        title: data.title,
        date: data.date,
      };
    });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug} className="mb-4">
            <Link href={`/blogs/${blog.slug}`}>
              <a className="text-blue-500 hover:underline">
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-gray-500">{blog.date}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}