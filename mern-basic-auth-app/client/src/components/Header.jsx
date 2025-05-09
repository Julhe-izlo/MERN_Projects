import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">AuthApp</h1>
                <nav className="nav-links">
                    {token ? (
                        <>
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                            {/* Add other protected links like profile if needed */}
                            <button className='nav-button' onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                            <NavLink to="/forgot-password" className="nav-link">Forgot Password</NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
