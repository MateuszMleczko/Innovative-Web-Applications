import logo from "../img/logo.svg";
import githubIcon from "../img/github-icon.svg"
import linkedinIcon from "../img/linkedin-icon.svg"

import "../styles/style.scss";

const Header = () => {
    return (
        <section className="header">
            <div className="header__upper">
                <div className="header__upper__content container">
                    <img className="header__upper__content__logo" src={logo} alt="logo" />
                    <div className="header__upper__content__menu">
                        <h1 className="header__upper__content__menu__el">OUR FEATURES</h1>
                        <h1 className="header__upper__content__menu__el">ABOUT US</h1>
                        <h1 className="header__upper__content__menu__el">OFFERT</h1>
                        <h1 className="header__upper__content__menu__el">PORTFOLIO</h1>
                        <h1 className="header__upper__content__menu__el">OWNER</h1>
                        <h1 className="header__upper__content__menu__el">CONTACT</h1>
                    </div>
                </div>
            </div>
            <div className="header__content container">
                <div className="header__content__text">
                    <h1 className="header__content__text__title">
                        Innovative Web Applications
                    </h1>
                    <h1 className="header__content__text__subtitle">
                        Piotr Kłosowski
                    </h1>
                </div>
                <div className="header__content__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="header__content__social-media">
                    <img src={githubIcon} alt="github-icon" className="header__content__social-media__el" />
                    <img src={linkedinIcon} alt="linkedin-icon" className="header__content__social-media__el" />
                </div>
            </div>

        </section>
    )
}

export default Header;