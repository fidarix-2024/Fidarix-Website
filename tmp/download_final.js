const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = {
  "astronaut.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/astronaut.png.webp",
  "rocket.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/rocket.png.webp",
  "planet.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/planet.png.webp",
  "dog.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/dog.png.webp",
  "funnel-footer.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/funnel-footer.png.webp",
  "alex-client.jpg.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/alex-client.jpg.webp",
  "blue-Ryan.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/blue-Ryan.png.webp",
  "Daniel-Briggs.jpg.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/Daniel-Briggs.jpg.webp",
  "Mike-Clark.jpg.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/Mike-Clark.jpg.webp",
  "icon-rocket.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-rocket.png.webp",
  "icon-computer.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-computer.png.webp",
  "icon-lightning.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-lightning.png.webp",
  "icon-magnet.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-magnet.png.webp",
  "icon-footer1-new.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer1-new.png.webp",
  "icon-footer2-new.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer2-new.png.webp",
  "icon-footer3-new.png.webp": "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer3-new.png.webp"
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Status ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const run = async () => {
  const publicDir = 'c:/Users/dishi/Fidarix/fidarix/public';
  for (const [name, url] of Object.entries(assets)) {
    const dest = path.join(publicDir, name);
    console.log(`Downloading ${name}...`);
    try {
      await download(url, dest);
      console.log(`Success: ${name}`);
    } catch (e) {
      console.error(`Error: ${name} - ${e.message}`);
    }
  }
};

run();
