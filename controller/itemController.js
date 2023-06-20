const Item = require('../models/item');
// controller for get all item lists
module.exports.allItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({
      success: true,
      name: items,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Items not retrieved',
    });
  }
};
// get item by ID
module.exports.singleItem = async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      
      console.log('item is '+ item)
      res.status(200).json({
        success: true,
        item: item,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Item not retrieved',
      });
    }
  };

  // post item to DB
//Create a new item in the database
module.exports.createItem = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Create a new item using the provided data
    const newItem = new Item({
      name,
      price,
    });
    const savedItem = await newItem.save();

    res.status(201).json({
      success: true,
      message:'item created',
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Item creation failed',
    });
  }
};
// Update an existing item by its ID
module.exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(id, { name, price }, { new: true });

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found',
      });
    }

    res.status(200).json({
      success: true,
      item: updatedItem,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Item update failed',
    });
  }
};

// Delete an item by its ID
module.exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Item deletion failed',
    });
  }
};

  

