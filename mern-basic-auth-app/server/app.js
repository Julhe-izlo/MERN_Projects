const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
const errorHandler = require("./middlewares/errorHandler.js");

dotenv.config();
connectDB();

const app = express();

app.use(helmet());      // Middleware: Secure HTTP headers

// Middleware: Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(cors());        // Middleware: Enable CORS
app.use(express.json());        // Middleware: Parse JSON request bodies

app.use("/api/auth", authRoutes);       // Routes
app.use(errorHandler);      // Error handler (keep it after all routes)

module.exports = app;
