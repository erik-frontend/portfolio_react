import React from 'react'
import "./header.scss"
import { Link } from 'react-scroll'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

const Header = () => {

    const { t, i18n } = useTranslation()

    const LinkParams = {smooth:true, duration:500}

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
                        <Link to='about' {...LinkParams}>{t("navigation.about")}</Link>
                    </li>
                    <li className="item">
                        <Link to='skills' {...LinkParams}>{t("navigation.skills")}</Link>
                    </li>
                    <li className="item">
                        <Link to='portfolio' {...LinkParams}>{t("navigation.portfolio")}</Link>
                    </li>
                    <li className="item">
                        <Link to='contact' {...LinkParams}>{t("navigation.contact")}</Link>
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