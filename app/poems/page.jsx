import fs from 'fs';
import path from 'path';

// This function reads the JSON files from the specified directory
async function getJsonFiles() {
  const dir = path.join(process.cwd(), '/data/poems');
  
  // Read the directory and filter for .json files
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));
  
  return files;
}

// Your main component
export default async function Page() {
  const files = await getJsonFiles();

  return (
    <div>
      <h1>Poems</h1>
      <ul>
        {files.map((file) => {
          // Remove the .json extension for the link
          const fileNameWithoutExt = file.replace('.json', '');
          
          return (
            <li key={file}>
              <a href={`/poems/${fileNameWithoutExt}`}>
                {fileNameWithoutExt}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}