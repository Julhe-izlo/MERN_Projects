const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  const cleanEmail = email.trim().toLowerCase();

  try {
    const userExists = await User.findOne({ email: cleanEmail });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email: cleanEmail, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const cleanEmail = email.trim().toLowerCase();

  try {
    const user = await User.findOne({ email: cleanEmail });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const cleanEmail = email.trim().toLowerCase();

  console.log("Forgot password requested for:", email);

  const user = await User.findOne({ email: cleanEmail });

  console.log("User found:", user);

  if (!user) return res.status(404).json({ message: "User not found" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

  const resetLink = `${process.env.BASE_URL}/api/auth/reset-password/${token}`;

  const html = `
    <h4>Hi ${user.name},</h4>
    <p>You requested to reset your password.</p>
    <a href="${resetLink}" style="padding: 10px 15px; background-color: #007bff; color: white; text-decoration: none;">
      Reset Password
    </a>
    <p>This link will expire in 15 minutes.</p>
  `;

  try {
    await sendEmail({ to: user.email, subject: "Reset Your Password", html });
    res.status(200).json({ message: "Reset link sent to your email" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Email could not be sent", error: err.message });
  }
};

const resetPassword = async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.password = password;
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token", error: err.message });
  }
};

module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
