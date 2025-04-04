import React from 'react'
import { IoIosAt } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import "./home.scss"
import homeImage from "../../assets/img/HomeImage.png";
import { useTranslation } from 'react-i18next';

const Home = ({sticky}) => {

    const { t, i18n } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setLanguage(lang)
    }


    return (
        <section className={`home-section ${sticky ? "active" : ""}`}>
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
            <div className="info">
                <h1 className="info-title">IT BERRIES</h1>
                <p className="info-text">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
                <button className="info-btn">READ MORE</button>
            </div>
        </section>
    )
}

export default Home