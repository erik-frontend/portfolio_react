import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import Explore from '../../utils/Explore'
import Separation from '../../utils/Separation'
import { services } from '../../utils/dataSource'
import "./about.scss"
import SubtitleText from '../../utils/SubtitleText'
import { useTranslation } from 'react-i18next';


const About = () => {

  const { t } = useTranslation()


  return (
    <section className='about'>
      <div className="container">
        <SectionTitle title={t("aboutMe.title")} />
        <SubtitleText>{t("aboutMe.description")}</SubtitleText>
        <Explore text="explore" />
        <Separation />
        <div className="about-services">
          {services.length ? (
            services.map((key, index) => {
              console.log(t`(aboutMe.${key}.title)`);
              
              return (
                <div className={`services-block bg-${key}`} key={index}>
                  <span className="title">{t(`aboutMe.${key}.title`)}</span>
                  <p className="text">{t(`aboutMe.${key}.description`)}</p>
                </div>
              )
            })
          ) : (
            <p>Services does not exist</p>
          )}
        </div>
        <Separation />
      </div>
    </section>
  )
}

export default About