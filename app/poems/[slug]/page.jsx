import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic'; // prevent Next.js from caching this handler's output

export default async function Page({ params }) {

  try {

    const filePath = path.join(process.cwd(), 'data', 'poems', params.slug + ".json");    
    const file = await fs.readFile(filePath, 'utf8'); 
    const data = JSON.parse(file);
    const meme = data.title;

    return (
      <>
        <h1>{meme}</h1>
        {data.lines && data.lines.map((line, index) => (
          <p key={index}>{line}</p> //dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </>
    );

  } catch (error) {

    return (<div>No dice</div>);
  }

}