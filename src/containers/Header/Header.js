import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className=" header shadow">
            <header className="text-white container py-2">
                <Link to="/"><img src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="" /></Link>
            </header>
        </div>
    )
}

export default Header
