const express = require("express");
const router = express.Router();
const Auth = require("./../middleware/auth");
const ProductControllers = require("./../controllers/ProductControllers");

const path = require("path");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, Date.now() + path.extname(file.originalname));
    console.log(cb);
  }
});
var upload = multer({ storage });
router.post(
  "/create/product",
  upload.single("image"),
  Auth,
  ProductControllers.createProduct
);
router.get(
  "/getProductByWishListID/:id",
  Auth,
  ProductControllers.getProductByWishListId
);
router.get("/get/AllProduct", Auth, ProductControllers.getAllProduct);
router.get("/get/product/:id", Auth, ProductControllers.getProductById);
router.delete("/delete/product/:id", Auth, ProductControllers.deleteProduct);
router.patch("/update/product/:id", Auth, ProductControllers.updateProduct);

module.exports = router;