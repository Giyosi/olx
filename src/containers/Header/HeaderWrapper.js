import styled from 'styled-components';
import colors from '../../data/colors';



const HeaderWrapper = styled.header`
    
    transition: 0.3s;
    background-color: ${props => props.colors.backgroundColor};
    color: ${props=>props.colors.color};

    & img {
        height: 50px;
        transition: 0.3s;
    }
    
    & button {
        font-size: 30px !important;
    }
        /* & Button:hover {
            margin: 0;
            border: 2px solid yellow !important;
        } */
`;

export default HeaderWrapper