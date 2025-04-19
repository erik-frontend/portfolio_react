import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import "./skills.scss"
import { icons } from '../../utils/IconsData'
import SkillsBlock from './SkillsBlock'

const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="container">
                    <SectionTitle title="skills" />
                    <h2 className="skills-title"></h2>
                    <div className="skills-container">
                    {icons.length ? (
                        icons.map((icon, index) => (
                            <SkillsBlock icon={icon} key={index}/>
                        ))
                    ) : (
                        <p>no display icon</p>
                    )}                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills