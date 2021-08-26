const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'product.json');

module.exports = {
  products_db : JSON.parse(fs.readFileSync(productsFilePath),'utf-8'),
  guardarUser : (product) => fs.writeFileSync(productsFilePath, JSON.stringify(product, null, 2), 'utf-8')  
}