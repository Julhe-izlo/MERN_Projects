# MERN Basic-Auth App

This is a full-stack MERN (MongoDB, Express, React, Node.js) authentication application. It features user registration, login, and password reset functionality with secure JWT-based authentication and email support for password recovery.

# 🔧 Features

## ✅ Functional
- User Registration with form validation
- User Login with JWT token issuance
- Password hashing using `bcryptjs`
- JWT-based authentication and route protection
- Reset Password via secure token and email link
- Frontend form validation and basic UI

## 🚧 Non-functional (Under Debugging)
- Forgot Password: Email sent, but token verification fails due to `User not found` issue in backend lookup

# 📁 Project Structure
```
mern-basic-auth-app/
│
├── client/     # React frontend
|   ├── .gitignore
|   ├── eslint.config.js
|   ├── index.html
|   ├── .env
|   ├── src/
|   │   ├── App.css
|   │   ├── App.jsx     # Main app routing
|   │   ├── components/     # Reusable UI components
|   │   │   ├── InputField.css
|   │   │   ├── InputField.jsx
|   │   │   ├── Header.jsx
|   │   │   └── Header.css
|   │   ├── pages/      # Route-specific pages
|   │   │   ├── RegisterPage.css
|   │   │   ├── RegisterPage.jsx
|   │   │   ├── LoginPage.css
|   │   │   ├── LoginPage.jsx
|   │   │   ├── HomePage.css
|   │   │   ├── HomePage.jsx
|   │   │   ├── ForgotPasswordPage.css
|   │   │   ├── ForgotPasswordPage.jsx
|   │   │   ├── ResetPasswordPage.css
|   │   │   └── ResetPasswordPage.jsx
|   │   ├── index.css
|   │   ├── main.jsx
|   │   └──  services/      # API calls (auth.js)
|   │           └── api/
|   |               └── auth.js 
|   └── vite.config.js
└── server/     # Node.js backend
    ├── config/     # Email and DB config
    │   ├── emailConfig.js
    │   └── db.js
    ├── controllers/        # Auth logic (register, login, reset)       
    │   └── authController.js
    ├── middlewares/             
    │   ├── authMiddleware.js
    │   └── errorHandler.js
    ├── models/     # User model with schema
    │   └── User.js
    ├── routes/     # Auth API routes
    │   └── authRoutes.js
    ├── utils/      # Token generation, email, validation
    │   ├── validateInput.js
    │   ├── sendEmail.js
    │   └── generateToken.js     
    ├── .env
    ├── .gitignore
    ├── app.js
    └── server.js       # App entry point
```

# Getting Started

## Prerequisites
- Node.js

- MongoDB (local or Atlas)

- A test email (Gmail recommended) for sending reset links

### 1. Clone the Repository

```bash
git clone https://github.com/himanshumaurya0007/MERN_Projects/mern-basic-auth-app.git
cd mern-signin-signup-app
``` 

### 2. Set Up Environment Variables

Create a .env file inside the server/ directory:

.env
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/authApp
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### 3. Install Dependencies
Server
```bash
cd .\server\
npm install
```

Client
```bash
cd .\client\
npm install
```

### 4. Run the App

In two terminals, run:

Server
```bash
cd server
npm run dev
```

Client
```bash
cd client
npm run dev
```

## 🌐 API Endpoints
| Action          | Method | URL                               |
| --------------- | ------ | --------------------------------- |
| Register        | POST   | `/api/auth/register`              |
| Login           | POST   | `/api/auth/login`                 |
| Forgot Password | POST   | `/api/auth/forgot-password`       |
| Reset Password  | PUT    | `/api/auth/reset-password/:token` |

# 📌 Notes
- Email service is set up using nodemailer via Gmail. Use an App Password for secure SMTP authentication.

- The app uses express-validator to validate form inputs on the server side.

- MongoDB connection is configured via mongoose.

## 🛠️ Future Enhancements
- Fix 'Forgot Password' user lookup issue

- Add account verification on registration

## 📃 License
This project is licensed under the MIT License.
