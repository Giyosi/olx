import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ThemeContex from "../../theme-context";
import FooterWrapper from './FooterWrapper';



const Footer = () => {

    const { colors } = useContext(ThemeContex);

    return (
        <FooterWrapper className=" bg-dark" colors={colors}>
            <div className="container text-white py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="">
                            <ul>
                                <li><Link to={"/mobileapps"}>Мобильные приложения</Link></li>
                                <li><Link to={"/pomosh"}>Помощь</Link></li>
                                <li><Link to={"/platnieuslugi"}>Платные услуги</Link></li>
                                <li><Link to={"/biznes"}>Бизнес на OLX</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <a className="me-2" href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" />
                        </a>
                        <a href="https://apps.apple.com/uz/app/torg-uz/id665094472?ign-mpt=uo%3D4">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer;
