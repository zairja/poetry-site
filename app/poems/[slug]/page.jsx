import { promises as fs } from 'fs';
import path from 'path';
import sanitizeHtml from 'sanitize-html';

export const dynamic = 'force-dynamic'; // prevent Next.js from caching this handler's output

export default async function Page({ params }) {
  try {

    const validSlug = /^[a-zA-Z0-9_-]+$/.test(params.slug);
    if (!validSlug) {
      throw new Error('Dirty slug!!! 🐌 (close enough)');
    }
    const filePath = path.join(process.cwd(), 'data', 'poems', `${params.slug}.json`);
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
    const poemTitle = data.title;

    return (
      <>
        <h1>{poemTitle}</h1>
        {data.lines && data.lines.map((line, index) => {
          const formattedLine = line.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
          const cleanLine = sanitizeHtml(formattedLine, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['br', 'h1', 'h2', 'h3']), // Add more tags as needed
            allowedAttributes: {}, // Allow specific attributes if needed
          });

          // Render based on HTML content detection
          const containsHtmlTags = /<\/?[a-z][\s\S]*>/i.test(cleanLine);

          if (containsHtmlTags) {
            return <div key={index} dangerouslySetInnerHTML={{ __html: cleanLine }} />;
          } else {
            const lineWithRestoredCharacters = cleanLine.replace(/&amp;/g, '&');
            return <p key={index} className="poetry-line">{lineWithRestoredCharacters}</p>;
          }
        })}
      </>
    );

  } catch (error) {
    return <div>Shameful error.</div>;
  }
}