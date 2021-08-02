const mongoose = require("mongoose");
const user = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true},

  },
  
);
module.exports = mongoose.model("user", user);