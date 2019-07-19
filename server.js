const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose.js')(app)
require('./server/models/product.js')(app)
require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log("listening on port 8000")
})
