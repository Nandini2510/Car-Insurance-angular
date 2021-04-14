const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db.js');
var buypolicyController = require('./controller/buypolicyController');

var app = express();

// middleware to send json data to nodejs proj
app.use(bodyParser.json())


app.listen(3000, () => console.log('server started'));

//route to buypolicy
app.use('/buypolicy',buypolicyController);