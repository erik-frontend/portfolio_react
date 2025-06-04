import "./home.scss"
import homeImage from "../../assets/img/HomeImage.png";
import { useTranslation } from 'react-i18next';
import Info from './Info';
import Social from '../social/Social';

const Home = ({ sticky }) => {

    const { t } = useTranslation()

    return (
        <>
            <section className={`home-section ${sticky ? "active" : ""}`}>
                <div className="home-wrapper">
                    <div className="home-left"></div>
                    <div className="home-right"> <img src={homeImage} alt="homeImg" className='home-img' /></div>
                    <div className="home-content">
                        <div className="container">
                            <h2 className='title'>{t("home.title")}</h2>
                            <h1 className='name-title'>{t("home.name")}</h1>
                            <span className='subTitle'>{t("home.subtitle")}</span>
                            <Social/>
                        </div>
                    </div>
                </div>

            </section>
            <Info t={t}/>
        </>

    )
}

export default Home