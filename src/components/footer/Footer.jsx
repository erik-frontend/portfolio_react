import React from 'react'
import "./footer.scss"
import Social from '../social/Social'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    const year = new Date()

  return (
    <footer className='footer'>
        <div className="container footer-wrapper">
            <button className="footer-btn" onClick={handleScrollToTop}>
                <MdOutlineKeyboardDoubleArrowUp className='footer-icon'/>
                BACK TO TOP
            </button>
            <Social/>
            <p className='footer-copyright'>
               @{year.getFullYear()} Erik Gorodyskyy <span>All Rights Reserved.</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer