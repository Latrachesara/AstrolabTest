const express = require("express")
const router = express.Router()
const AuthControllers = require ("./../controllers/AuthControllers")

router.post ("/register", AuthControllers.Register)
router.post ("/login", AuthControllers.login)
router.post ("/logout", AuthControllers.logout)
router.get("/VerifiLoggedIn", AuthControllers.VerifiLoggedIn);


module.exports = router