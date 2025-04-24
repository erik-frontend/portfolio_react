import React from 'react'
import { icons, blocks } from '../../utils/IconsData'
import SkillsBlock from './SkillsBlock'

const SkillsWrapper = () => {
    return (
        <>
            <div className="skills-wrapper">
                <div className="skills-container">
                    {blocks.length ? (
                        blocks.map((block, index) => (
                            <div key={index}>
                                <h2 className="skills-title">{block.title}</h2>
                                {block.icons.map((icon, iconIndex) => (
                                    <SkillsBlock icon={icon} key={iconIndex} /> 
                                    // доделать прикол с названием иконок и иконками. ошибка из-за того что нужно еще сделать мап каждого объекта отвечающего за иконку.
                                ))}
                            </div>
                        ))
                    ) : (<p>no icons</p>)}
                    {/* {icons.length ? (
                        icons.map((icon, index) => (
                            <SkillsBlock icon={icon} key={index} />
                        ))
                    ) : (
                        <p>no display icon</p>
                    )} */}
                </div>
            </div>
        </>
    )
}

export default SkillsWrapper