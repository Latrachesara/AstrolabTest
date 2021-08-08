const mongoose = require("mongoose");
const wishlist = mongoose.Schema(
  {
    name: { type: String, required: true },
    createdBy: { type: mongoose.Types.ObjectId, ref: "user" }
  },
  { timestamps: true }
);
module.exports = mongoose.model("wishlist", wishlist);