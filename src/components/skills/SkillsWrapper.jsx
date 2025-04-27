import React from 'react'
import { icons, titles, blocks } from '../../utils/IconsData'
import SkillsBlock from './SkillsBlock'

const SkillsWrapper = () => {
    return (
        <>
            <div className="skills-wrapper">
                <div className="skills-container">
                    {blocks.length ? (
                        blocks.map((block, blockIndex) => (
                            <div key={blockIndex} className="skills-block">
                                <h2 className="skills-title">{block.title}</h2>
                                {block.icons.map((icon, iconIndex) => (
                                    <SkillsBlock icon={icon.icon} name={icon.name} key={iconIndex} />
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>no display icon</p>
                    )}
                </div>
            </div>
            {/* <div className="skills-wrapper">
                <div className="skills-container">
                    {icons.length ? (
                        icons.map((icon, index) => (
                            <SkillsBlock icon={icon} key={index} />
                        ))
                    ) : (
                        <p>no display icon</p>
                    )}
                </div>
            </div> */}
        </>
    )
}

export default SkillsWrapper