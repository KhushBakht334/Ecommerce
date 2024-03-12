const express = require('express');
const router = express.Router();
const userAuthController=require("../controller/userAuth-controller")

router.route("/register").post(userAuthController.register);
router.route("/login").post(userAuthController.login);

module.exports=router;