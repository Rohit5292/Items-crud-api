const Item = require('../models/item');
// controller for get all item lists
module.exports.allItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({
      success: true,
      name: items.name,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Items not retrieved',
    });
  }
};
module.exports.singleItem = async (req, res) => {
    try {
      const item = await Item.findById(req.body.id);
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
  

