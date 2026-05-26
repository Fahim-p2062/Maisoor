import fs from 'fs';
import path from 'path';

async function downloadImages() {
  const dataPath = 'src/data/products.json';
  const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const targetDir = 'src/assets/products';

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const imgUrl = product.image;
    if (imgUrl.startsWith('http')) {
      const fileName = `product_${product.id}.jpg`;
      const filePath = path.join(targetDir, fileName);
      
      try {
        console.log(`Downloading ${imgUrl}...`);
        const res = await fetch(imgUrl);
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(filePath, buffer);
        
        // Update product image path to local relative path
        product.image = fileName;
        console.log(`Saved as ${fileName}`);
      } catch (err) {
        console.error(`Failed to download ${imgUrl}:`, err);
      }
    }
  }

  // Write back to products.json
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
  console.log('Updated products.json with local image paths.');
}

downloadImages();
