# MERN Basic-Auth App – Client (Frontend)

This is the **React-based frontend** for the MERN authentication system. It provides a modern, responsive user interface for signing up, logging in, and resetting passwords, built with Vite, React Router, and Axios for API integration.

## 🌐 Tech Stack

- **React 19**
- **Vite** – Fast dev environment and build tool
- **React Router Dom** – Client-side routing
- **Axios** – API communication
- **React Hook Form** – Form handling
- **React Icons** – Icon library

## 📁 Project Structure
```
client/
├── .env # Environment variables
├── index.html # HTML template
├── vite.config.js # Vite configuration
├── eslint.config.js # ESLint rules
├── src/
│    ├── App.jsx # Main routing and layout
│    ├── App.css # Global styles
│    ├── main.jsx # React DOM mount point
│    ├── index.css # Base styling
│    ├── components/ # Reusable UI elements
│    │      ├── InputField.jsx
│    │      └── Header.jsx
│    ├── pages/ # Page components
│    │      ├── RegisterPage.jsx
│    │      ├── LoginPage.jsx
│    │      ├── HomePage.jsx
│    │      ├── ForgotPasswordPage.jsx
│    │      └── ResetPasswordPage.jsx
│    └── services/
│           └── api/
│               └── auth.js # Axios-based API handlers
```

## 📦 Environment Setup

Make sure your `.env` file in the root of the client folder looks like this:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

This sets the base URL for all Axios requests to your backend server.

## Getting Started

1. Install dependencies
```bash
cd client
npm install
```

2. Run development server
```bash
npm run dev
```
The app will be accessible at http://localhost:5173 by default.

3. Build for production
```bash
npm run build
```

4. Preview the production build
```bash
npm run preview
```

## ✨ Features
- ✅ Form validation with react-hook-form

- ✅ Input abstraction via reusable components

- ✅ Axios-based service structure for API communication

- ✅ Password reset flows (under testing)

- 🎨 Clean and responsive UI layout with modular CSS

- 🧭 Navigation via react-router-dom v7

## 📝 Notes
- Ensure the backend (`server/`) is running at the same time for API requests to work.

- The password reset feature is non-functional due to a backend issue currently under debugging.

- Styles are handled with regular CSS, organized per-component.