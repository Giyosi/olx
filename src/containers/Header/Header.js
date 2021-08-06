import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import "./Header.css";
import ThemeContex from '../../theme-context';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import HeaderWrapper from './HeaderWrapper';



const Header = () => {

    const { theme, setTheme, colors } = useContext(ThemeContex);
    console.log(theme, setTheme, colors);   

    const toggle = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <HeaderWrapper className={`shadow`} colors={colors}>
            <div className="container d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                <Link to="/" className="d-flex align-items-center"><img className="rounded-circle" src={theme == "light" ? "https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" : "https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"} alt="" /></Link>
                <p className="m-0 ms-5 fs-5 fw-bold">Olx.uz</p>
                </div>
                <Button className="bg-transparent border-0" onClick={toggle}><FontAwesomeIcon icon={faLightbulb} color={theme == "light" ? "yellow" : "white"} /></Button>
            </div>

        </HeaderWrapper>
    )
}

export default Header
