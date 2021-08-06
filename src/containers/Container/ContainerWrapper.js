
import styled from "styled-components";


const ContainerWrapper = styled.footer`
    background-color:${props => props.colors.body};
    color: ${props => props.colors.color};
    
    a{
        color: ${props => props.colors.color};  
        font-weight: bold;
    }

    .content {
        min-height: 400px;
    }
`;

export default ContainerWrapper;