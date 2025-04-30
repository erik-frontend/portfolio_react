import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import "./skills.scss"
import SkillsWrapper from './SkillsWrapper'
import TextTitle from '../../utils/TextTitle'
import { icons, learning, skills } from '../../utils/IconsData'


const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="skills-wrapper">
                    <SectionTitle title="skills" />
                    <TextTitle title="USING NOW:" />
                    <SkillsWrapper icons={icons} />
                    <TextTitle title="LEARNING:" />
                    <SkillsWrapper icons={learning} />
                    <TextTitle title="OTHER SKILLS:" />
                    <SkillsWrapper icons={skills} />
                </div>
            </section>
        </>
    )
}

export default Skills