import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import "./skills.scss"
import SkillsWrapper from './SkillsWrapper'

const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="container">
                    <SectionTitle title="skills" />
                    <SkillsWrapper />
                </div>
            </section>
        </>
    )
}

export default Skills