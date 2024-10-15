import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from '../../context/AuthContext';
import LogoutPopup from '../LogoutPopup';

import './index.css';

const details = ['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'];

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const { logout, isLoggedIn } = useAuth(); // Assume isAuthenticated indicates user status
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const handleLogout = () => {
        logout();
        setPopupOpen(false);
    };

    const handleUserIconClick = () => {
        if (isLoggedIn) {
            setPopupOpen(true); 
        } else {
            navigate('/login'); 
        }
    };

    return (
        <div className="header-bar">
            <div className='header-section'>
                <div className="logo-section">
                    <AiOutlineMenu size={23} className="icon-menu" onClick={toggleSidebar} />
                    <img src='/images/Logo.png' alt='logo' className='logo-image' />
                </div>
                <h1 className="logo-name">TANTRA</h1>
                <div className="end-section">
                    <div className="icon-section">
                        <CiSearch size={23} className="icon" />
                        <Link to="/wishlist"><GrFavorite size={23} className="icon" /></Link>
                        <Link to="/cart"><LiaShoppingBagSolid size={23} className="icon" /></Link>
                    </div>
                    <div className="user-details">
                        <CiUser size={23} className="icon" onClick={handleUserIconClick} />
                        <select className="language-selection">
                            <option className="option">ENG</option>
                            <option>TEL</option>
                            <option>HIN</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr className="grey-line" />
            <div className="details-section">
                {details.map((each) => (
                    <h4 key={each} className="detail">{each}</h4>
                ))}
            </div>
            <hr className="grey-line" />
            <div className="tagline-section">
                <h1 className="">DISCOVER OUR PRODUCTS</h1>
                <p className="para">Your One-Stop Destination for Top-Tier Products Find What You Need, Love What You Get!</p>
            </div>
            <hr className="grey-line" />

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="sidebar-logo-section">
                        <img src='/images/Logo.png' alt='logo' className='sidebar-logo-image' />
                        <h1>TANTRA</h1>
                    </div>
                    <div className="user-details-mobile">
                        <div className="user">
                            <CiUser size={23} className="icon" />
                            <p>username</p>
                        </div>
                        <select className="language-selection">
                            <option className="option">ENG</option>
                            <option>TEL</option>
                            <option>HIN</option>
                        </select>
                        <button onClick={handleLogout} type="button">Logout</button>
                    </div>
                </div>
            )}

            {/* Logout Popup */}
            {isPopupOpen && (
                <LogoutPopup 
                    onLogout={handleLogout} 
                    onClose={() => setPopupOpen(false)} 
                    isAuthenticated={isLoggedIn} // Pass authentication status
                />
            )}
        </div>
    );
}

export default Header;
