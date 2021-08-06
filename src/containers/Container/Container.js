import React, { useContext } from 'react'
import Header from "../Header";
import Footer from "../Footer";
import ThemeContex from "../../theme-context";
import ContainerWrapper from './ContainerWrapper';



const Container = (props) => {

    const { colors } = useContext(ThemeContex);

    return (
        <ContainerWrapper colors={colors}>
            <Header />
            <div className="content">{props.children}</div>
            <Footer />
        </ContainerWrapper>
    )
}

export default Container
