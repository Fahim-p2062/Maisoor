import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('raw.html', 'utf8');
const $ = cheerio.load(html);

const products = [];

$('.product').each((i, el) => {
  const title = $(el).find('.woocommerce-loop-product__title').text().trim() || $(el).find('h2').text().trim();
  const price = $(el).find('.price').text().trim();
  const image = $(el).find('img').attr('src') || $(el).find('img').attr('data-src');
  if (title) {
    products.push({ id: i + 1, title, price, image });
  }
});

fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
console.log('Saved', products.length, 'products to products.json');
