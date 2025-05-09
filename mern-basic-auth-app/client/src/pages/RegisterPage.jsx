import { useForm } from 'react-hook-form';
import { register as registerUser } from '../services/api/auth';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import "./AuthPage.css";
import './RegisterPage.css';
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function RegisterPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);


    const onSubmit = async (data) => {
        try {
            await registerUser(data);
            alert('Registration successful. Please login.');
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.message || 'Registration failed');
        }
    };

    const passwordValue = watch('password', '');

    const requirements = [
        { label: "At least 8 characters", test: /.{8,}/ },
        { label: "At least one lowercase letter", test: /[a-z]/ },
        { label: "At least one uppercase letter", test: /[A-Z]/ },
        { label: "At least one number", test: /\d/ },
        { label: "At least one special character", test: /[^\w\s]/ },
    ];
    return (
        <div className="auth-container">
            <h2 className="auth-title">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="Name" type="text" name="name" register={register} error={errors.name} />
                <InputField label="Email" type="email" name="email" register={register} error={errors.email} />
                <InputField
                    label="Password" type="password" name="password" register={register} error={errors.password}
                    validationRules={{
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
                            message:
                                "Password must be at least 8 characters long, include an uppercase letter, lowercase letter, number, and special character"
                        },

                    }}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)} />

                {/* Live password checklist */}
                {isPasswordFocused && (
                    <ul className="password-checklist">
                        {requirements.map((req, index) => {
                            const isValid = req.test.test(passwordValue);
                            return (
                                <li key={index} className={isValid ? "valid" : "invalid"}>
                                    {isValid ? <FaCheckCircle className="icon valid-icon" /> : <FaTimesCircle className="icon invalid-icon" />}
                                    {req.label}
                                </li>
                            );
                        })}
                    </ul>
                )}

                <button type="submit" className="auth-button">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;