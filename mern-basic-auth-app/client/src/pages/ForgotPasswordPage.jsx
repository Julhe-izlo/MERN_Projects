import { useForm } from 'react-hook-form';
import { forgotPassword } from '../services/api/auth';
import InputField from '../components/InputField';
import "./AuthPage.css";
import './ForgotPasswordPage.css';

function ForgotPasswordPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await forgotPassword(data);
            alert('Password reset link sent to your email.');
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to send reset link');
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Forgot Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="Email" type="email" name="email" register={register} error={errors.email} />
                <button type="submit" className="auth-button">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;