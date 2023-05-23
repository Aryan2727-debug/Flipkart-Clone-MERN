const express = require("express");
const userSignup = require("../controller/user-controller.js");
const userLogin = require("../controller/login-controller.js");
const getProducts = require("../controller/product-controller.js");
const getProductById = require("../controller/productid-controller.js");
const addPaymentGateway = require("../controller/payment-controller.js");

const router = new express.Router();

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.get("/products", getProducts);
router.get('/product/:id', getProductById);

router.post("/payment", addPaymentGateway);

module.exports = router;