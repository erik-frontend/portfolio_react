import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import Explore from '../../utils/Explore'
import Separation from '../../utils/Separation'
import { services } from '../../utils/dataSource'

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <SectionTitle title="about me"/>
        <p className='about-subtitle'></p>
        <Explore text="explore"/>
        <Separation/>
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
      </div>
    </section>
  )
}

export default About