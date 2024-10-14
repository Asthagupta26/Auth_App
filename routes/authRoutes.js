const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddlware = require("../middleware/authMiddleware");

router.post("/register", authController.register)
router.post("/login",authController.login);
router.get("/protected",authMiddlware, authController.protected);

module.exports = router;