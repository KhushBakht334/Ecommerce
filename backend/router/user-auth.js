const express = require('express');
const router = express.Router();
const userAuthController=require("../controller/userAuth-controller");
const fetchUserMiddleware = require('../middleware/fetchuser');

router.route("/register").post(userAuthController.register);
router.route("/login").post(userAuthController.login);
router.route("/fetchuser").get(fetchUserMiddleware, userAuthController.fetchUser);

module.exports=router;