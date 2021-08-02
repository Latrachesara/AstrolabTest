const express = require("express");
const router = express.Router();
const WishlistControllers = require("./../controllers/WishlistControllers");

router.post("/creation/wishlist",WishlistControllers.CreationWishlist);
router.get("/allWishlist", WishlistControllers.AllWishlist);

module.exports = router;