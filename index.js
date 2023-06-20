const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const itemRoute = require('./routes/route');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/items', itemRoute);

module.exports = app; // Export the app object

