import React, { useState, useEffect } from 'react'
import "./header.scss"
import { Link } from 'react-scroll'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { menuItems } from '../../utils/dataSource'

const Header = ({ sticky }) => {

    const [isActive, setIsActive] = useState(false)

    const [activeLink, setActiveLink] = useState("")

    const [language, setLanguage] = useState("en")

    const { t, i18n } = useTranslation()

    const LinkParams = { smooth: true, duration: 500 }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setLanguage(lang)
    }

    const handleActive = () => {
        setIsActive(!isActive)
    }

    const handleActiveLink = (id) => {
        setActiveLink(id)
        setIsActive(!isActive)
    }

    return (
        <header className={`header ${sticky ? "fixed" : ""}`}>
            <div className="container">
                <Logo />
                <nav className={`nav ${isActive ? "active" : ""}`}>
                    <ul className="menu">
                        {menuItems.length && (
                            menuItems.map(item => (
                                <li className="item" key={item.id}>
                                    <Link to={item.id} {...LinkParams}
                                        onClick={() => handleActiveLink(item.id)}
                                        className={`${item.id === activeLink ? "active" : ""}`}
                                    >{t(`navigation.${item.link}`)}</Link>
                                </li>
                            ))
                        )}
                    </ul>
                    <div className="language-switcher">
                        <button className={`${language === "en" ? "active" : ""}`} onClick={() => changeLanguage("en")}>en</button>
                        <button className={`${language === "pl" ? "active" : ""}`} onClick={() => changeLanguage("pl")}>pl</button>
                    </div>
                </nav>
                <div className="burger" onClick={handleActive}>
                    {isActive ? <IoCloseSharp /> : <RxHamburgerMenu />}
                </div>
            </div>
        </header>
    )
}

export default Header