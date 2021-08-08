const mongoose = require("mongoose");
const Product = mongoose.Schema(
  {
    name: { type: String, required: true },
    Price: { type: Number, required: true },
    currency: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    wishlist: { type: mongoose.Types.ObjectId, ref: "user" },
    createdBy: { type: mongoose.Types.ObjectId, ref: "user" },
    image: { type: String }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", Product);