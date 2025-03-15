import React from 'react'
import "./header.scss"
import { Link } from 'react-scroll'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <Logo/>
            <nav>
                <ul className="menu">
                    <li className="item">
                        <Link to=''>About</Link>
                    </li>
                    <li className="item">
                        <Link to=''>Skills</Link>
                    </li>
                    <li className="item">
                        <Link to=''>Portfolio</Link>
                    </li>
                    <li className="item">
                        <Link to=''>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header