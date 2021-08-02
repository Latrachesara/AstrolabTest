const mongoose = require("mongoose");
const wishlist = mongoose.Schema(
  {
    name: { type: String, required: true },
  
  },
  
);
module.exports = mongoose.model("wishlist", wishlist);