const express = require('express');
const router = express.Router();
const authController = require("../controller/auth-controller");
const fetchUserMiddleware = require('../middleware/fetchuser');

router.route("/upload").post(authController.picUploadMiddleware, authController.picUpload);
router.route("/addproduct").post(authController.addProduct);
router.route("/removeproduct").post(authController.removeProduct);
router.route("/getallproducts").get(authController.getAllProducts);
router.route("/newcollections").get(authController.newCollections);
router.route("/popularinwomen").get(authController.popularWomen);
router.route("/addtocart").post(fetchUserMiddleware, authController.addToCart);

module.exports = router;
