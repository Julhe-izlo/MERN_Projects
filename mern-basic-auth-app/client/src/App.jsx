import './App.css'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import HomePage from "./pages/HomePage";

import ProtectedRoute from './pages/ProtectedRoute';
import PublicRoute from './pages/PublicRoute';

function App() {

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } /> */}
        <Route path='/login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />
        <Route path='/forgot-password' element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        } />
        <Route path='/reset-password/:token' element={
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        } />

        <Route path='/home' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />

      </Routes>
    </>
  )
}

export default App;
