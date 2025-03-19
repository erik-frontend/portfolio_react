import React from 'react'
import "./header.scss"
import { Link } from 'react-scroll'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

const Header = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    } 

  return (
    <header className='header'>
        <div className="container">
            <Logo/>
            <nav className='nav'>
                <ul className="menu">
                    <li className="item">
                        <Link to='about' smooth={true} duration={500}>{t("navigation.about")}</Link>
                    </li>
                    <li className="item">
                        <Link to='skills'>{t("navigation.skills")}</Link>
                    </li>
                    <li className="item">
                        <Link to='portfolio'>{t("navigation.portfolio")}</Link>
                    </li>
                    <li className="item">
                        <Link to='contact'>{t("navigation.contact")}</Link>
                    </li>
                </ul>
                <div className="language-switcher">
                    <button onClick={() => changeLanguage("en")}>en</button>
                    <button onClick={() => changeLanguage("pl")}>pl</button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header