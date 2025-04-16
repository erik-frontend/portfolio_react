import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import Explore from '../../utils/Explore'
import Separation from '../../utils/Separation'
import { services } from '../../utils/dataSource'
import "./about.scss"
import SubtitleText from '../../utils/SubtitleText'

const About = ({ t }) => {
  return (
    <section className='about'>
      <div className="container">
        <SectionTitle title="about me" />
        <SubtitleText>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</SubtitleText>
        <Explore text="explore" />
        <Separation />
        <div className="about-services">
          {services.length ? (
            services.map((service, index) => (
              <div className={`services-block bg-${service.class}`} key={index}>
                <span className="title">{service.title}</span>
                <p className="text">{service.description}</p>
              </div>
            ))
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