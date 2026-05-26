import fs from 'fs';

const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));

const cleaned = products.map(p => {
  // Clean price: extract the "Current price is: XXX" or just the last price
  let currentPrice = p.price;
  const match = p.price.match(/Current price is:\s*([\d,.]+৳)/);
  if (match) {
    currentPrice = match[1];
  } else {
    // fallback if no "Current price" is found
    const matches = p.price.match(/[\d,.]+৳/g);
    if (matches && matches.length > 0) {
      currentPrice = matches[matches.length - 1];
    }
  }

  // Get full res image
  const fullImage = p.image.replace(/-\d+x\d+\.(jpg|jpeg|png)$/, '.$1');

  return {
    ...p,
    price: currentPrice,
    image: fullImage
  };
});

fs.writeFileSync('src/data/products.json', JSON.stringify(cleaned, null, 2));
console.log('Cleaned products saved to src/data/products.json');
