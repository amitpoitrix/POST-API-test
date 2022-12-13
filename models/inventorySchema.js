const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
    {
        productId: {
            type: Number,
            required: [true, 'Please provide Product ID'],
        },
        quantity: {
            type: Number,
            required: [true, 'Please provide the Product Quantity'],
        },
        operation: {
            type: String,
            required: [true, 'Please provide the operation to perform'],
        },
    }
);

module.exports = mongoose.model('inventory', inventorySchema);