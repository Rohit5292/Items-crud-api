const express = require('express');
const { allItems, singleItem, createItem, updateItem,deleteItem } = require('../controller/itemController');

const route = express.Router();

route.get('/',allItems);
route.get('/:id',singleItem);
route.post('/',createItem);
route.put('/:id', updateItem);

route.delete('/:id', deleteItem);

module.exports = route;