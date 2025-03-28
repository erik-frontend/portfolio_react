import React from 'react'
import { IoIosAt } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import "./home.scss"
import homeImage from "../../assets/img/HomeImage.png";

const Home = () => {
    return (
        <section className='home-section'>
            <div className="home-wrapper">
                <div className="home-left"></div>
                <div className="home-right"> <img src={homeImage} alt="" className='home-img'/></div>
                <div className="home-content">
                    <div className="container">
                        <h2 className='title'>Hi, I am</h2>
                        <h1 className='name-title'>Erik Gorodyskyy</h1>
                        <span className='subTitle'>Front-end and React Developer</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home