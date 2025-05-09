const express = require("express");
const { registerUser, loginUser, forgotPassword, resetPassword } = require("../controllers/authController.js");
const { registerValidation, loginValidation, forgotPasswordValidation, resetPasswordValidation } = require("../utils/validateInput.js");
const router = express.Router();

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, loginUser);
router.post("/forgot-password", forgotPasswordValidation, forgotPassword);
router.put("/reset-password/:token", resetPasswordValidation, resetPassword);

module.exports = router;
