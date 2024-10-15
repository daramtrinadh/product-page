import React from 'react';
import './index.css'
const LogoutPopup = ({ onLogout, onClose, isAuthenticated }) => {
    return (
        <div className="logout-popup">
            <div className="popup-content">
                <h2>{isAuthenticated ? "Are you sure you want to logout?" : "You need to login!"}</h2>
                <div className="popup-buttons">
                    {isAuthenticated ? (
                        <button onClick={onLogout}>Logout</button>
                    ) : (
                        <button onClick={onClose}>Login</button>
                    )}
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default LogoutPopup;
