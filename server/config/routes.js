const products = require('../controllers/products.js');

module.exports = function(app){

    app.post('/products/new',products.add);
    app.get('/products',products.showAll);
    app.delete('/products/:id', products.removeProduct);
    app.put('/products/:id',products.editProduct),
    app.get('/products/:id',products.getOne)
}