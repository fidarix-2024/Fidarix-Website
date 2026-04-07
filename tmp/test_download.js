const https = require('https');
const fs = require('fs');

const url = 'https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/astronaut.png.webp';
const file = fs.createWriteStream('c:/Users/dishi/Fidarix/fidarix/public/astronaut.png.webp');

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download Completed');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
