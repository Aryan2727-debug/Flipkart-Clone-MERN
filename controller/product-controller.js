const Product = require("../model/product-schema.js");

const getProducts = async (request, response) => {
    try{
       const products = await Product.find({});

       response.status(200).json(products);
    }catch(err){
       response.status(500).json({message : err.message});
    }
};

module.exports = getProducts;