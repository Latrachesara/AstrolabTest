const express = require("express");
const router = express.Router();
const WishlistControllers = require("./../controllers/WishlistControllers");
const Auth = require("./../middleware/auth");
router.post("/creation/wishlist", Auth, WishlistControllers.CreationWishlist);
router.get("/gatAll/allWishlist", Auth, WishlistControllers.AllWishlist);
router.delete("/delete/wishlist/:id", Auth, WishlistControllers.DeleteWishList);
router.patch("/update/wishlist/:id", Auth, WishlistControllers.updateWishList);
module.exports = router;