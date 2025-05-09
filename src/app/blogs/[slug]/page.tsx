import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import 'github-markdown-css/github-markdown.css'; // Import GitHub Markdown CSS

export async function generateStaticParams() {
  // Read all Markdown files in the BlogPosts directory
  const files = fs.readdirSync(path.join(process.cwd(), 'src/app/blogs/BlogPosts'));
  return files.map((file) => ({
    slug: file.replace('.md', ''), // Remove the .md extension to get the slug
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Construct the file path for the Markdown file
  const filePath = path.join(process.cwd(), 'src/app/blogs/BlogPosts', `${params.slug}.md`);

  // Read the Markdown file
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse the front matter and content
  const { content, data } = matter(fileContent);

  // Convert Markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="markdown-body p-6">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-6">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}