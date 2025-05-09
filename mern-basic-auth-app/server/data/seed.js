const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const connectDB = require("../config/db");

dotenv.config();
connectDB();

const seedUsers = async () => {
  try {
    await connectDB();

    // Clear existing users
    await User.deleteMany();

    // Create demo user with hashed password
    const hashedPassword = await bcrypt.hash("123456", 10);
    await User.create([
      {
      name: "Demo User",
      email: "demo@example.com",
      password: hashedPassword,
    },
      {
      name: "Himanshu Maurya",
      email: "himanshu.m1802@gmail.com",
      password: hashedPassword,
    },
    ]);

    console.log("User seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedUsers();
