const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');

cloudinary.config({
  cloud_name: 'dtowl6hgl',
  api_key: '996625685747289',
  api_secret: 'xKsqN8f4I5fgR-Di_dDGwvbVY84',
  secure: true
});

async function main() {
  const res = await cloudinary.uploader.upload(
    'https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?auto=format&fit=crop&w=1200&q=85',
    {
      folder: 'nexora/products',
      public_id: 'anker-737-power-bank-24000mah-140w',
      overwrite: true,
      transformation: [
        { width: 1200, height: 900, crop: 'fill', gravity: 'auto', quality: 'auto', fetch_format: 'auto' }
      ]
    }
  );
  console.log('✓ Anker 737 uploaded:', res.secure_url);
  const filePath = './data/products.js';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    'image: "/images/products/powerbank-slim.svg"',
    `image: "${res.secure_url}"`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ data/products.js updated for tech-005!');
}

main().catch(console.error);
