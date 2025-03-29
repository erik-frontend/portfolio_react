import React from 'react'
import { IoIosAt } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import "./home.scss"
import homeImage from "../../assets/img/HomeImage.png";
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t, i18n } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setLanguage(lang)
    }


    return (
        <section className='home-section'>
            <div className="home-wrapper">
                <div className="home-left"></div>
                <div className="home-right"> <img src={homeImage} alt="homeImg" className='home-img' /></div>
                <div className="home-content">
                    <div className="container">
                        <h2 className='title'>{t("home.title")}</h2>
                        <h1 className='name-title'>{t("home.name")}</h1>
                        <span className='subTitle'>{t("home.subtitle")}</span>
                        <div className="home-social">
                            <a href="" className="home-social-link">
                                <IoIosAt />
                            </a>
                            <a href="" className="home-social-link">
                                <GrGithub />
                            </a>
                            <a href="" className="home-social-link">
                                <TbBrandLinkedinFilled />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block" style={{height: "500px"}}></div>
        </section>
    )
}

export default Home