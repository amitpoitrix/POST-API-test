const InventoryModel = require('../models/inventorySchema');

const getProduct = async (req, res) => {
    res.send('Get the Product');
}

const createProduct = async (req, res) => {
    try {
        const { productId, quantity, operation } = req.body;
        if(!productId || !quantity || !operation){
            res.status(400).json({msg: 'Please provide all the details !!'});
        }

        // Find the product
        const product = await InventoryModel.findOne({productId});
        if(!product){
            res.status(400).json({msg: `Product doesnot exist with ProductID: ${productId}`});
        }

        if(operation === 'add'){
            let newQuantity = product.quantity + quantity;
            await InventoryModel.updateOne({productId}, newQuantity, {new: true, runValidators: true});
        }

        if(operation === 'subtract'){
            let newQuantity = product.quantity - quantity;
            await InventoryModel.updateOne({productId}, newQuantity, {new: true, runValidators: true});
        }

        res.status(201).json({ msg: `Sucess` });
    } catch (error) {
        res.status(400).json({msg: error});
    }
}

module.exports = {
    getProduct,
    createProduct
};