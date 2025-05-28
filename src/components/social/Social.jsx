import React from 'react'
import "./social.scss"
import { IoIosAt } from 'react-icons/io'
import { GrGithub } from 'react-icons/gr'
import { TbBrandLinkedinFilled } from 'react-icons/tb'
import { link } from 'framer-motion/client'

const social = [
    { link: "#", icon: <IoIosAt /> },
    { link: "#", icon: <GrGithub /> },
    { link: "#", icon: <TbBrandLinkedinFilled /> },
]

const Social = () => {
    return (
        <div className="social">
            {social.map((item, index) => (
                <a href={item.link} className="social-link" key={index}>
                    {item.icon}
                </a>
            ))}
        </div>
    )
}

export default Social