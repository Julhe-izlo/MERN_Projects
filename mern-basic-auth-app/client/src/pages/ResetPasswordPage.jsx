import { useForm } from 'react-hook-form';
import { resetPassword } from '../services/api/auth';
import InputField from '../components/InputField';
import { useParams, useNavigate } from 'react-router-dom';
import "./AuthPage.css";
import './ResetPasswordPage.css';

function ResetPasswordPage() {
    const { token } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await resetPassword(token, data);
            alert('Password reset successful. Please login.');
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.message || 'Reset failed');
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Reset Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="New Password" type="password" name="password" register={register} error={errors.password} />
                <button type="submit" className="auth-button">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordPage;