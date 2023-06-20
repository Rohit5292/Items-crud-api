const express = require('express');
const { allItems, singleItem } = require('../controller/itemController');

const route = express.Router();

route.get('/',allItems);
route.get('/:id',singleItem);

module.exports = route;