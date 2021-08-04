import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import "./Header.css";
import ThemeContex from '../../theme-context';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    
    transition: 0.3s;

    & {
        background-color:  #002f34 !important;
    }

    & img {
        height: 50px;
        transition: 0.3s;
    }

    /* & Button:hover {
        margin: 0;
        border: 2px solid yellow !important;
    } */
    
    &.light {
        background-color: #fff !important;
        color: black !important;
    }

    &.dark {
        background-color: #002f34 !important;
        color: white !important;
    }

    & button {
        font-size: 30px !important;
    }
`;


const Header = () => {

    const { theme, setTheme } = useContext(ThemeContex);
    console.log(theme, setTheme);

    const toggle = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <HeaderWrapper className={`shadow ${theme}`}>
            <div className="container d-flex align-items-center justify-content-between py-2">
                <Link to="/"><img className="rounded-circle" src={theme == "light" ? "https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" : "https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"} alt="" /></Link>
                <Button className="bg-transparent border-0" onClick={toggle}><FontAwesomeIcon icon={faLightbulb} color={theme == "light" ? "yellow" : "white"} /></Button>
            </div>

        </HeaderWrapper>
    )
}

export default Header
