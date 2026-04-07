const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = 'c:/Users/dishi/Fidarix/fidarix/public';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (status code ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const processFiles = async () => {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    if (fs.lstatSync(filePath).isFile()) {
       const content = fs.readFileSync(filePath, 'utf8').trim();
       if (content.startsWith('http')) {
          console.log(`Downloading ${file} from ${content}...`);
          try {
             await download(content, filePath);
             console.log(`Successfully downloaded ${file}`);
          } catch (err) {
             console.error(`Failed to download ${file}:`, err.message);
          }
       }
    }
  }
};

processFiles();
