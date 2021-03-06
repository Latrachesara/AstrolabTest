const express = require("express");
const router = express.Router();
const UserControlllers = require("./../controllers/UserControllers");

router.get("/:id", UserControlllers.getUser);
router.get("/get/AllUsers", UserControlllers.getAllUsers);

module.exports = router;