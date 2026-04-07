const https = require('https');
const fs = require('fs');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        return reject(new Error(`Status: ${res.statusCode} for ${url}`));
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
};

const assets = [
  ["astronaut.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/astronaut.png.webp"],
  ["rocket.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/rocket.png.webp"],
  ["planet.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/planet.png.webp"],
  ["dog.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/dog.png.webp"],
  ["funnel-footer.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/funnel-footer.png.webp"],
  ["hero.png", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/home-hero.png"],
  ["logo-w.svg", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/logo-w.svg"]
];

const main = async () => {
    const publicDir = 'c:/Users/dishi/Fidarix/fidarix/public';
    for (const [name, url] of assets) {
        const dest = path.join(publicDir, name);
        console.log(`Downloading ${name} from ${url}...`);
        try {
            await download(url, dest);
            console.log(`Successfully downloaded ${name}`);
        } catch (e) {
            console.error(`Failed to download ${name}: ${e.message}`);
        }
    }
}

main();
