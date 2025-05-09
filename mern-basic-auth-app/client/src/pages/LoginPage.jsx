import { useForm } from 'react-hook-form';
import { login } from '../services/api/auth';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import "./AuthPage.css";
import './LoginPage.css';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await login(data); // assume response has token
            const token = response.data.token;
            localStorage.setItem("token", token); // store token
            alert('Login successful');
            navigate('/home');      // Redirect to home
        } catch (err) {
            alert(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="Email" type="email" name="email" register={register} error={errors.email} />
                <InputField label="Password" type="password" name="password" register={register} error={errors.password} />
                <button type="submit" className="auth-button">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;