import fs from 'fs';
import path from 'path';

async function getJsonFiles() {
  const dir = path.join(process.cwd(), '/data/poems');
    
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));
  
  return files;
}

export default async function Page() {
  const files = await getJsonFiles();

  return (
    <div>
      <h1>Poems</h1>
      <ul>
        {files.map((file) => {
          
          const fileNameWithoutExt = file.replace('.json', '');
          
          return (
            <li key={file}>
              <a  href={`/poems/${fileNameWithoutExt}`}>
                {fileNameWithoutExt}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}