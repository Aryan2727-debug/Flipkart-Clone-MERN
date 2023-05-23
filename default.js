const products = require("./constants/data.js");
const Product = require("./model/product-schema.js");

const DefaultData = async () => {
    try{

        await Product.insertMany(products);

        console.log("Data imported successfully");

    }catch(err){
        console.log(err);
    };
};

module.exports = DefaultData;