# MERN Basic-Auth App – Server (Backend)
This is the **Node.js and Express** backend for the MERN authentication system. It handles user registration, login, password hashing, JWT-based authentication, and email-based password reset functionality.

## 🧩 Tech Stack

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Nodemailer** for sending password reset emails
- **Helmet + Rate Limiter + CORS** for security
- **dotenv** for managing environment variables

---

## 📁 Folder Structure
```
server/
├── config/ # DB and Email config
│     ├── db.js # MongoDB connection
│     └── emailConfig.js # SMTP transport config
├── controllers/
│      └── authController.js # Core auth logic (register, login, forgot/reset password)
├── middlewares/
│      ├── authMiddleware.js # Protect routes with JWT
│      └── errorHandler.js # Error-handling middleware
├── models/
│      └── User.js # Mongoose user schema
├── routes/
│      └── authRoutes.js # Routes for /api/auth/
├── utils/
│      ├── generateToken.js # JWT token generator
│      ├── sendEmail.js # Email utility using nodemailer
│      └── validateInput.js # Express validators
├── .env # Environment configuration
├── app.js # Express app setup
└── server.js # App entry point
```

## ⚙️ Environment Variables

Set the following values in your `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-basic-auth-app
JWT_SECRET=supersecretkey
EMAIL_USER=demo@example.com
EMAIL_PASS=demoapppasswordaa
```

⚠️ Never commit real credentials to public repositories. Use environment-specific .env files.

## 📦 Installation & Running

1. Install dependencies:
```bash
cd server
npm install
```

2. Start the server in development mode (with auto-restart using nodemon):
```bash
npm run dev
```

3. Start in production:
```bash
npm start
```

Make sure MongoDB is running locally or update `MONGODB_URI` for remote DB.

## 📜 API Endpoints (Base URL: /api/auth/)

| Method | Route                    | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/register`              | Register a new user      |
| POST   | `/login`                 | Login and receive token  |
| POST   | `/forgot-password`       | Request password reset   |
| PUT    | `/reset-password/:token` | Reset password via token |

# 🛠 Script Configuration in `package.json`
```bash
"scripts": {
  "start": "node server.js",          // Runs the app normally
  "dev": "nodemon server.js",         // Auto-reloads server on changes (dev mode)
  "seed": "node data/seed.js"         // Placeholder for seeding database (if implemented)
}
```

- ✅ start: Launches the server using Node (use in production).

- ✅ dev: Launches the server using nodemon for easier development.

- ⚠️ seed: This is a reserved script for data seeding. Create a data/seed.js file to use it.

## 🚧 Current Status
- ✅ User registration and login with hashed passwords

- ✅ Token-based authentication using JWT

- ✅ Input validation with express-validator

- ✅ Email configuration set up via Nodemailer

- ⚠️ Forgot Password functionality implemented, but under testing/debugging

## 🧪 Dependencies
```bash
"express", "mongoose", "jsonwebtoken", "bcryptjs", "dotenv",
"nodemailer", "cors", "helmet", "express-rate-limit", "express-validator"
```

Dev-only:
```bash
"nodemon"
```