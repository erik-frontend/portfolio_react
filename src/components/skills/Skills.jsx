import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import "./skills.scss"
import SkillsWrapper from './SkillsWrapper'
import TextTitle from '../../utils/TextTitle'
import { icons, learning, skills } from '../../utils/IconsData'
import { useTranslation } from 'react-i18next';


const Skills = () => {

    const { t } = useTranslation()



    return (
        <>
            <section className="skills">
                <div className="skills-wrapper">
                    <div className="container">
                        <SectionTitle title="skills" />
                    </div>
                    <TextTitle title={t("skills.usingNow")} />
                    <SkillsWrapper icons={icons} />
                    <TextTitle title={t("skills.title")} />
                    <SkillsWrapper icons={learning} />
                    <TextTitle title={t("skills.learning")} />
                    <SkillsWrapper icons={skills} />
                </div>
            </section>
        </>
    )
}

export default Skills