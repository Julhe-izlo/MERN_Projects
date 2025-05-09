const { body } = require("express-validator");

exports.registerValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .trim()
        .escape(),

    body("email")
        .isEmail()
        .withMessage("Valid email is required")
        .normalizeEmail(),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
];

exports.loginValidation = [
    body("email")
        .isEmail()
        .withMessage("Valid email is required")
        .normalizeEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
];

exports.forgotPasswordValidation = [
    body("email")
        .isEmail()
        .withMessage("Please provide a valid email"),
];

exports.resetPasswordValidation = [
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
];