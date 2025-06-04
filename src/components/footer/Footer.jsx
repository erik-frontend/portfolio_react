import React from 'react'
import "./footer.scss"
import Social from '../social/Social'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation()

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const year = new Date()

    return (
        <footer className='footer'>
            <div className="container footer-wrapper">
                <button className="footer-btn" onClick={handleScrollToTop}>
                    <MdOutlineKeyboardDoubleArrowUp className='footer-icon' />
                    {t("footer.backToTop")}
                </button>
                <Social />
                <p className='footer-copyright'>
                    @{year.getFullYear()} Erik Gorodyskyy <span>{t("footer.copyright")}</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer