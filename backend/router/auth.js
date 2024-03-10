const express = require('express');
const router = express.Router();
const authController = require("../controller/auth-controller");

router.route("/upload").post(authController.picUploadMiddleware, authController.picUpload);
router.route("/addproduct").post(authController.addProduct);

module.exports = router;
