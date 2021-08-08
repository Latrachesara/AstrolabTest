const express = require("express");
const router = express.Router();

const ProductControllers = require("./../controllers/ProductControllers");
router.post("/create/product", ProductControllers.createProduct);
router.get("/getProductByWishListID/:id", ProductControllers.getProductByWishListId);
router.get("/get/AllProduct", ProductControllers.getAllProduct);
router.get("/get/product/:id", ProductControllers.getProductById);
router.delete("/delete/product/:id", ProductControllers.deleteProduct);
router.put("/update/product/:id", ProductControllers.updateProduct);

module.exports = router;