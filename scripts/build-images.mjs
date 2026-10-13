// Builds optimized portrait assets exclusively from pic.png (transparent cutout).
// pic1.jpeg is NOT used.
import sharp from 'sharp';
import { mkdirSync, copyFileSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });
mkdirSync('public', { recursive: true });

// Ensure pic.png is accessible directly from web root and assets folder
copyFileSync('pic.png', 'public/pic.png');
copyFileSync('pic.png', `${OUT}/pic.png`);

const meta = await sharp('pic.png').metadata();
console.log(`Processing portrait exclusively from pic.png (${meta.width}x${meta.height})`);

// Generate responsive WebP versions directly from pic.png
for (const w of [1100, 720, 420]) {
  await sharp('pic.png')
    .resize({ width: w })
    .webp({ quality: 92, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop using pic.png
const portrait = await sharp('pic.png').resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">PORTFOLIO</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images built successfully and exclusively from pic.png!');

