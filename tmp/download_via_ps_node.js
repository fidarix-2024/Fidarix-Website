const { execSync } = require('child_process');
const fs = require('fs');

const assets = [
  ["astronaut.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/astronaut.png.webp"],
  ["rocket.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/rocket.png.webp"],
  ["planet.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/planet.png.webp"],
  ["dog.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/dog.png.webp"],
  ["funnel-footer.png.webp", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/funnel-footer.png.webp"],
  ["hero.png", "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/home-hero.png"]
];

const publicDir = 'c:\\Users\\dishi\\Fidarix\\fidarix\\public';

assets.forEach(([name, url]) => {
  const dest = publicDir + '\\' + name;
  console.log(`Downloading ${name} to ${dest}...`);
  try {
    // Wrap command in triple quotes if needed, but here I'll just use a direct call if possible.
    // Use powershell's Invoke-WebRequest which handles the URL better.
    const cmd = `powershell -Command "Invoke-WebRequest -Uri '${url}' -OutFile '${dest}'"`;
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Success: ${name}`);
  } catch (e) {
    console.error(`Error ${name}: ${e.message}`);
  }
});
