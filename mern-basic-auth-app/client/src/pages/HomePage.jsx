import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // remove auth token
        navigate("/login"); // redirect to login
    };

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Home Page</h1>
            <p className="home-description">You are successfully logged in.</p>
            <button onClick={handleLogout} className="home-button">Logout</button>
        </div>
    );
};

export default HomePage;
