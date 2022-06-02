const users = require("../models/products.model")
const path = require("path");

exports.getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/product.html"));
}

exports.saveProduct = (req,res)=>{
    const name = req.body.name;
    const price = Number(req.body.price);
    const user = {
        name,
        price
    }
    products.push(product);

    res.status(201).json({
        success: true,
        products
    })
}