import React from 'react';

const Logout = ({ setIsAuthenticated }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <div className="container">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
